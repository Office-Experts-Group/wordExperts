import sgMail from "@sendgrid/mail";
import { getEmailSignature } from "../../../utils/emailSignature";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const VALID_FILE_TYPES = [
  // Documents
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.oasis.opendocument.text",
  "application/rtf",
  "text/plain",
  "text/csv",
  "text/html",
  "text/markdown",

  // Images
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/svg+xml",
  "image/tiff",

  // Archives (if needed)
  "application/zip",
  "application/x-rar-compressed",

  // Spreadsheets
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.oasis.opendocument.spreadsheet",
];

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      file,
      name,
      email,
      phone,
      message,
      operatingSystem,
      softwareVersions,
      website,
      honeypot,
      location,
      service,
    } = body;

    // Validate required fields
    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    if (honeypot) {
      return Response.json(
        { error: "Bot submission detected" },
        { status: 400 }
      );
    }

    // File validation
    let attachments = [];
    if (file) {
      if (!VALID_FILE_TYPES.includes(file.type)) {
        return Response.json({ error: "Invalid file type" }, { status: 400 });
      }

      if (Buffer.byteLength(file.content, "base64") > MAX_FILE_SIZE) {
        return Response.json(
          { error: "File size exceeds limit" },
          { status: 400 }
        );
      }

      attachments = [
        {
          content: file.content,
          filename: file.name,
          type: file.type,
        },
      ];
    }

    const { htmlSignature, textSignature } = getEmailSignature();

    const clientTextMessage = `
      You have received a new quote request from ${name} (${email}) from ${
      location || "Unknown location"
    }.
      Phone: ${phone || "Not provided"}
      Service Requested: ${service || "Not specified"}
      Operating System: ${operatingSystem || "Not provided"}
      Software Versions: ${softwareVersions || "Not provided"}
      Website: ${website || "Not provided"}
      Message: ${message || "Not provided"}

      ${textSignature}
    `;

    const customerTextMessage = `
      Hi ${name},

      Thank you for reaching out to our ${
        location || ""
      } office. We've received your quote request:

      Service Requested: ${service || "Not specified"}
      Operating System: ${operatingSystem || "Not provided"}
      Software Versions: ${softwareVersions || "Not provided"}
      Website: ${website || "Not provided"}
      Message: ${message || "Not provided"}

      We'll get back to you soon!

      ${textSignature}
    `;

    const clientHtmlMessage = `
      <p>You have received a new quote request from <strong>${name}</strong> (${email}) from ${
      location || "Unknown location"
    }.</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not provided"
      }</p>
      <p><strong>Software Versions:</strong> ${
        softwareVersions || "Not provided"
      }</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "Not provided"}</p>
      ${htmlSignature}
    `;

    const customerHtmlMessage = `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to our ${
        location || ""
      } office. We've received your quote request:</p>
      <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
      <p><strong>Operating System:</strong> ${
        operatingSystem || "Not provided"
      }</p>
      <p><strong>Software Versions:</strong> ${
        softwareVersions || "Not provided"
      }</p>
      <p><strong>Website:</strong> ${website || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "Not provided"}</p>
      <p>We'll get back to you soon!</p>
      ${htmlSignature}
    `;

    try {
      // Send to primary business email
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: "joshua@officeexperts.com.au",
        subject: `New Quote Request from ${location || "Website"}`,
        text: clientTextMessage,
        html: clientHtmlMessage,
        ...(attachments.length > 0 && { attachments }),
        replyTo: email,
      });

      // Send to general business email
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: "consult@wordexperts.com.au",
        subject: `New Quote Request from ${location || "Website"}`,
        text: clientTextMessage,
        html: clientHtmlMessage,
        ...(attachments.length > 0 && { attachments }),
        replyTo: email,
      });

      // Send to customer
      await sgMail.send({
        from: "consult@officeexperts.com.au",
        to: email,
        subject: "Thank you for your quote request!",
        text: customerTextMessage,
        html: customerHtmlMessage,
      });

      return Response.json(
        { message: "Quote request submitted successfully" },
        { status: 200 }
      );
    } catch (emailError) {
      console.error(
        "SendGrid error:",
        emailError?.response?.body || emailError
      );
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
