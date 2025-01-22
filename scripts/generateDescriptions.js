// scripts/generateDescriptions.js
const fs = require("fs").promises;
const path = require("path");

async function extractPageContent(dirPath) {
  const content = {
    layout: "",
    page: "",
  };

  try {
    // Read layout.js
    const layoutPath = path.join(dirPath, "layout.js");
    const layoutContent = await fs
      .readFile(layoutPath, "utf-8")
      .catch(() => "");

    if (layoutContent) {
      // Extract metadata description if it exists
      const descMatch = layoutContent.match(/description:\s*['"`](.*?)['"`]/);
      if (descMatch) {
        content.layout = descMatch[1];
      }
    }

    // Read page.js
    const pagePath = path.join(dirPath, "page.js");
    const pageContent = await fs.readFile(pagePath, "utf-8").catch(() => "");

    if (pageContent) {
      // Extract text content, focusing on strings and JSX content
      content.page = pageContent
        .replace(/import.*from.*/g, "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\{\/\*.*?\*\/\}/g, "")
        .replace(/["'`]([^"'`]+)["'`]/g, "$1")
        .replace(/\s+/g, " ")
        .trim();
    }

    return content;
  } catch (error) {
    console.error(`Error reading files in ${dirPath}:`, error);
    return content;
  }
}

function createDescription(content) {
  // Combine layout metadata and page content
  let description = content.layout || "";

  // If page content exists and description is short, add relevant page content
  if (content.page && description.length < 100) {
    const sentences = content.page
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 20 && s.length < 200)
      .filter((s) => !s.includes("http"))
      .filter((s) => !s.includes("www"));

    if (sentences.length > 0) {
      description += (description ? " " : "") + sentences[0];
    }
  }

  // Ensure proper length (max 160 chars)
  if (description.length > 160) {
    description = description.substring(0, 157) + "...";
  }

  return description;
}

async function analyzeDirectory(appDir) {
  try {
    const descriptionsDir = path.join(process.cwd(), "descriptions");
    await fs.mkdir(descriptionsDir, { recursive: true });

    const entries = await fs.readdir(appDir, { withFileTypes: true });
    const directories = entries
      .filter((entry) => entry.isDirectory())
      .filter((entry) => !entry.name.startsWith(".")); // Ignore hidden directories

    let suggestions = {};

    for (const dir of directories) {
      const dirPath = path.join(appDir, dir.name);
      const content = await extractPageContent(dirPath);

      const description = createDescription(content);
      if (description) {
        suggestions[dir.name] = {
          path: `app/${dir.name}`,
          suggestion: description,
          length: description.length,
        };
      }
    }

    // Generate output
    const output = Object.entries(suggestions)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(
        ([page, data]) =>
          `Path: ${data.path}\n` +
          `Length: ${data.length} characters\n` +
          `Suggested description:\n${data.suggestion}\n\n` +
          `---\n`
      )
      .join("\n");

    const timestamp = new Date().toISOString().split("T")[0];
    const outputPath = path.join(
      descriptionsDir,
      `suggestions-${timestamp}.txt`
    );

    await fs.writeFile(outputPath, output);
    console.log(`✓ Analysis complete! Check ${outputPath} for results`);
  } catch (error) {
    console.error("Error analyzing directories:", error);
  }
}

// Run the script
const appDir = path.join(process.cwd(), "app");
analyzeDirectory(appDir);
