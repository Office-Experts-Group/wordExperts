// videoData.js
// Central repository for all video metadata
// Used for video sitemap generation and video page rendering
// Each video object contains all necessary metadata for SEO and display

// Helper function to format video duration from seconds to MM:SS
export const formatDuration = (seconds) => {
  if (!seconds || seconds === 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

// Main video data array - exported as both named and default export
export const videoData = [
  {
    id: "copy-and-paste-word-formatting",
    title: "Copy and Paste Word Formatting",
    description:
      "Master the art of copying and pasting formatting in Microsoft Word. Learn how to efficiently transfer styles, fonts, and formatting between documents while maintaining consistency.",
    videoUrl: "/videos/copy-and-paste-word-formatting.mp4",
    url: "/videos/copy-and-paste-word-formatting",
    duration: 46,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/copy-and-paste-word-formatting.webp",
    category: "Templates",
    featured: true,
  },
  {
    id: "word-template-solutions",
    title: "Word Template Solutions",
    description:
      "Learn how to create, customise, and implement professional templates that streamline your document workflows and ensure brand consistency.",
    videoUrl: "/videos/word-template-solutions.mp4",
    url: "/videos/word-template-solutions",
    duration: 231,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/word-template-solutions.webp",
    category: "Templates",
    featured: true,
  },
  {
    id: "insert-and-format-tables-button",
    title: "Insert and Format Tables Button",
    description:
      "Learn how to use the Insert and Format Tables button in Microsoft Word to quickly create and style professional tables in your documents.",
    videoUrl: "/videos/insert-and-format-tables-button.mp4",
    url: "/videos/insert-and-format-tables-button",
    duration: 38,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-and-format-tables-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "remove-instructional-text-button",
    title: "Remove Instructional Text Button",
    description:
      "Discover how to use the Remove Instructional Text button to quickly clean up placeholder text and instructions from your Word templates.",
    videoUrl: "/videos/remove-instructional-text-button.mp4",
    url: "/videos/remove-instructional-text-button",
    duration: 16,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/remove-instructional-text-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "clean-up-styles-button",
    title: "Clean Up Styles Button",
    description:
      "Learn how to use the Clean Up Styles button to remove unwanted formatting and standardise your document styles in Microsoft Word.",
    videoUrl: "/videos/clean-up-styles-button.mp4",
    url: "/videos/clean-up-styles-button",
    duration: 35,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/clean-up-styles-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-and-remove-a3-buttons",
    title: "Insert and Remove A3 Buttons",
    description:
      "Master the Insert and Remove A3 buttons to efficiently add or remove A3-sized pages within your Word documents.",
    videoUrl: "/videos/insert-and-remove-a3-buttons.mp4",
    url: "/videos/insert-and-remove-a3-buttons",
    duration: 28,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-and-remove-A3-buttons.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "table-list-button",
    title: "Table List Buttons",
    description:
      "Explore the Table List buttons functionality to streamline table management and organisation in your Word documents.",
    videoUrl: "/videos/table-list-button.mp4",
    url: "/videos/table-list-buttons",
    duration: 29,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/table-list-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "image-placement-button",
    title: "Image Placement Button",
    description:
      "Learn how to use the Image Placement button to control image positioning and wrapping in your Word templates.",
    videoUrl: "/videos/image-placement-button.mp4",
    url: "/videos/image-placement-button",
    duration: 19,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/image-placement-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-landscape-page-button",
    title: "Insert Landscape Page Button",
    description:
      "Discover how to quickly insert landscape-oriented pages into your portrait documents using the Insert Landscape Page button.",
    videoUrl: "/videos/insert-landscape-page-button.mp4",
    url: "/videos/insert-landscape-page-button",
    duration: 8,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-landscape-page-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-appendix-page-button",
    title: "Insert Appendix Page Button",
    description:
      "Learn how to use the Insert Appendix Page button to add properly formatted appendix sections to your Word documents.",
    videoUrl: "/videos/insert-appendix-page-button.mp4",
    url: "/videos/insert-appendix-page-button",
    duration: 10,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-appendix-page-button.webp",
    category: "Buttons",
    featured: false,
  },
  {
    id: "insert-cover-page",
    title: "Insert Cover Page",
    description:
      "Master the Insert Cover Page button to quickly add professional cover pages to your Word documents with consistent branding.",
    videoUrl: "/videos/insert-cover-page.mp4",
    url: "/videos/insert-cover-page",
    duration: 10,
    uploadDate: "2025-10-13T00:00:00+00:00",
    thumbnailUrl: "/videos/thumbnails/insert-cover-page.webp",
    category: "Templates",
    featured: false,
  },
];

// Also export as 'videos' for backwards compatibility
export const videos = videoData;

// Extract unique categories from video data
export const categories = ["All", ...new Set(videoData.map((v) => v.category))];

// Helper function to get video by ID
export const getVideoById = (id) => {
  return videoData.find((video) => video.id === id);
};

// Helper function to get video by Canva ID
export const getVideoByCanvaId = (canvaId) => {
  return videoData.find((video) => video.canvaId === canvaId);
};

// Helper function to get all videos
export const getAllVideos = () => {
  return videoData;
};

// Helper function to get videos by category
export const getVideosByCategory = (category) => {
  if (category === "All") return videoData;
  return videoData.filter((video) => video.category === category);
};

// Helper function to get featured videos
export const getFeaturedVideos = () => {
  return videoData.filter((video) => video.featured);
};

// Helper function to generate Canva embed URL
export const getCanvaEmbedUrl = (canvaId) => {
  return `https://www.canva.com/design/${canvaId}/view?embed`;
};

// Default export
export default videoData;
