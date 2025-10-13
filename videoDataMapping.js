// videoDataMapping.js
// Maps page URLs to their associated video data for sitemap generation
// This file is used by next-sitemap.config.js to generate video sitemaps

module.exports = {
  // Video Portal page - contains all videos
  "/video-portal": [
    {
      title: "Document Automation with Word VBA",
      description:
        "Learn how to automate repetitive tasks in Microsoft Word using VBA macros. This comprehensive tutorial covers the basics of VBA programming for Word automation.",
      thumbnailUrl:
        "https://www.wordexperts.com.au/video-thumbnails/vba-automation.webp",
      playerUrl: "https://www.wordexperts.com.au/videos/vba-automation.mp4",
      duration: 1200,
      uploadDate: "2025-01-15T00:00:00+00:00",
    },
    {
      title: "Creating Professional Word Templates",
      description:
        "Master the art of creating professional, reusable Word templates. Learn about styles, building blocks, and content controls for efficient document creation.",
      thumbnailUrl:
        "https://www.wordexperts.com.au/video-thumbnails/word-templates.webp",
      playerUrl: "https://www.wordexperts.com.au/videos/word-templates.mp4",
      duration: 900,
      uploadDate: "2025-02-10T00:00:00+00:00",
    },
    {
      title: "Advanced Mail Merge Techniques",
      description:
        "Discover advanced mail merge techniques for creating personalized documents at scale. Learn about conditional content, custom fields, and troubleshooting common issues.",
      thumbnailUrl:
        "https://i.ytimg.com/vi/EXAMPLE_YOUTUBE_ID/maxresdefault.jpg",
      playerUrl: "https://www.youtube.com/embed/EXAMPLE_YOUTUBE_ID",
      duration: 1500,
      uploadDate: "2025-03-05T00:00:00+00:00",
    },
    {
      title: "Working with Word Fields and Formulas",
      description:
        "Understanding and implementing Word fields for dynamic content. Learn how to use REF fields, document properties, and formulas for professional documents.",
      thumbnailUrl:
        "https://www.wordexperts.com.au/video-thumbnails/word-fields.webp",
      playerUrl: "https://www.wordexperts.com.au/videos/word-fields.mp4",
      duration: 1100,
      uploadDate: "2025-04-20T00:00:00+00:00",
    },
    {
      title: "Custom Ribbons and Toolbars in Word",
      description:
        "Learn how to create custom ribbons and toolbars to enhance productivity. This tutorial covers XML customization and button functionality.",
      thumbnailUrl:
        "https://www.wordexperts.com.au/video-thumbnails/custom-ribbons.webp",
      playerUrl: "https://www.wordexperts.com.au/videos/custom-ribbons.mp4",
      duration: 1350,
      uploadDate: "2025-05-15T00:00:00+00:00",
    },
  ],

  // Example: Blog post with embedded video
  // Add more pages as needed when you embed videos in blog posts
  // "/blog/word-template-tutorial": [
  //   {
  //     title: "Word Template Tutorial - Step by Step Guide",
  //     description:
  //       "Complete guide to creating Word templates with styles, content controls, and building blocks.",
  //     thumbnailUrl: "https://www.wordexperts.com.au/video-thumbnails/template-tutorial.webp",
  //     playerUrl: "https://www.wordexperts.com.au/videos/template-tutorial.mp4",
  //     duration: 1800,
  //     uploadDate: "2025-01-20T00:00:00+00:00",
  //   },
  // ],
};

// Helper function to convert videoData.js format to sitemap format
// Use this when you need to sync videoData.js with videoDataMapping.js
function convertVideoDataToMapping(videos) {
  return videos.map((video) => {
    const isYouTube = video.youtubeId !== null;
    const thumbnailUrl = isYouTube
      ? `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`
      : `https://www.wordexperts.com.au${video.imagePath}`;

    const playerUrl = isYouTube
      ? `https://www.youtube.com/embed/${video.youtubeId}`
      : `https://www.wordexperts.com.au${video.videoPath}`;

    // Convert date string to ISO format
    const uploadDate = new Date(video.date).toISOString();

    return {
      title: video.title,
      description: video.description,
      thumbnailUrl,
      playerUrl,
      duration: video.duration,
      uploadDate,
    };
  });
}

// Example usage (uncomment to use):
// const { videos } = require('./app/video-portal/videoData');
// const mappedVideos = convertVideoDataToMapping(videos);
// console.log(mappedVideos);// videoDataMapping.js
// Maps page URLs to their associated video data for sitemap generation
// This file is used by next-sitemap.config.js to generate video sitemaps

module.exports = {
  // Video Portal page - contains all videos
  "/video-portal": [
    {
      title: "Document Automation with Word VBA",
      description:
        "Learn how to automate repetitive tasks in Microsoft Word using VBA macros. This comprehensive tutorial covers the basics of VBA programming for Word automation.",
      thumbnailUrl: "https://i.ytimg.com/vi/EXAMPLE_ID_1/maxresdefault.jpg",
      playerUrl: "https://www.youtube.com/embed/EXAMPLE_ID_1",
      duration: 1200,
      uploadDate: "2025-01-15T00:00:00+00:00",
    },
    {
      title: "Creating Professional Word Templates",
      description:
        "Master the art of creating professional, reusable Word templates. Learn about styles, building blocks, and content controls for efficient document creation.",
      thumbnailUrl: "https://i.ytimg.com/vi/EXAMPLE_ID_2/maxresdefault.jpg",
      playerUrl: "https://www.youtube.com/embed/EXAMPLE_ID_2",
      duration: 900,
      uploadDate: "2025-02-10T00:00:00+00:00",
    },
    {
      title: "Advanced Mail Merge Techniques",
      description:
        "Discover advanced mail merge techniques for creating personalized documents at scale. Learn about conditional content, custom fields, and troubleshooting common issues.",
      thumbnailUrl: "https://i.ytimg.com/vi/EXAMPLE_ID_3/maxresdefault.jpg",
      playerUrl: "https://www.youtube.com/embed/EXAMPLE_ID_3",
      duration: 1500,
      uploadDate: "2025-03-05T00:00:00+00:00",
    },
    {
      title: "Working with Word Fields and Formulas",
      description:
        "Understanding and implementing Word fields for dynamic content. Learn how to use REF fields, document properties, and formulas for professional documents.",
      thumbnailUrl: "https://i.ytimg.com/vi/EXAMPLE_ID_4/maxresdefault.jpg",
      playerUrl: "https://www.youtube.com/embed/EXAMPLE_ID_4",
      duration: 1100,
      uploadDate: "2025-04-20T00:00:00+00:00",
    },
    {
      title: "Custom Ribbons and Toolbars in Word",
      description:
        "Learn how to create custom ribbons and toolbars to enhance productivity. This tutorial covers XML customization and button functionality.",
      thumbnailUrl: "https://i.ytimg.com/vi/EXAMPLE_ID_5/maxresdefault.jpg",
      playerUrl: "https://www.youtube.com/embed/EXAMPLE_ID_5",
      duration: 1350,
      uploadDate: "2025-05-15T00:00:00+00:00",
    },
  ],

  // Example: Blog post with embedded video
  // "/blog/word-template-tutorial": [
  //   {
  //     title: "Word Template Tutorial - Step by Step Guide",
  //     description:
  //       "Complete guide to creating Word templates with styles, content controls, and building blocks.",
  //     thumbnailUrl: "https://i.ytimg.com/vi/EXAMPLE_ID/maxresdefault.jpg",
  //     playerUrl: "https://www.youtube.com/embed/EXAMPLE_ID",
  //     duration: 1800,
  //     uploadDate: "2025-01-20T00:00:00+00:00",
  //   },
  // ],

  // Add more page-to-video mappings as needed
  // The key should be the page path (e.g., "/blog/post-slug")
  // The value should be an array of video objects
};
