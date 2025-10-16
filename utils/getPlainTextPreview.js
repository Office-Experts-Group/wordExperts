// Helper function to strip HTML tags and truncate text for card previews
export const getPlainTextPreview = (htmlString, maxLength = 150) => {
  // Remove HTML tags
  const plainText = htmlString
    .replace(/<[^>]*>/g, " ")
    // Replace multiple spaces with single space
    .replace(/\s+/g, " ")
    // Trim whitespace
    .trim();

  // Truncate and add ellipsis if needed
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength).trim() + "...";
  }

  return plainText;
};
