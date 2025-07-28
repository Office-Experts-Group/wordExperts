"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Contact from "../../components/Contact";
import CTAMain from "../(components)/CTAMain";

import styles from "../../styles/blog.module.scss";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Blog post data for Word Experts
  const blogPosts = [
    {
      id: 1,
      title: "How to Convert a Canva Design into a Microsoft Word Template",
      description:
        "Learn how to convert Canva designs into functional Microsoft Word templates. This guide shows you the best methods for creating editable Word documents while maintaining your brand elements from Canva designs.",
      slug: "convert-canva-to-word",
      date: "April 14, 2025",
      author: "Daniel Thomas",
      readingTime: "5 min",
      category: "Conversions",
      featured: true,
      imagePath: "/canva-to-word.webp",
    },
    {
      id: 2,
      title: "Ultimate Guide to Microsoft Word Templates",
      description:
        "What is a Word Template? Explore the benefits, types, and implementation of Microsoft Word templates for your organization. Learn how templates can ensure consistency and save valuable time.",
      slug: "ultimate-guide-to-word-templates",
      date: "April 8, 2025",
      author: "Daniel Thomas",
      readingTime: "8 min",
      category: "Templates",
      featured: false,
      imagePath: "/template.webp",
    },
    {
      id: 3,
      title:
        "Fields and Repeating Data in Word: Best Practices for Business Templates",
      description:
        "Learn how to use Word's fields to transform static templates into dynamic, error-resistant tools. Master REF fields, document properties, and content controls to eliminate manual data entry and reduce costly errors.",
      slug: "fields-and-repeating-data-in-word",
      date: "July 24, 2025",
      author: "Daniel Thomas",
      readingTime: "12 min",
      category: "Templates",
      featured: false,
      imagePath: "/blog/waste.webp",
    },
    {
      id: 4,
      title: "Creating Word Templates for Legal Firms: Best Practices",
      description:
        "Learn how to create professional, efficient Word templates for legal firms. Discover best practices for reducing errors, ensuring consistency, and protecting client confidentiality with smart template design.",
      slug: "word-templates-for-legal-firms",
      date: "July 25, 2025",
      author: "Daniel Thomas",
      readingTime: "10 min",
      category: "Legal",
      featured: false,
      imagePath: "/blog/legal.webp",
    },
  ];

  // Extract unique categories
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Function to render a card (used for both featured and regular posts)
  const renderPostCard = (post, isFeatured = false) => (
    <Link
      href={`/blog/${post.slug}`}
      key={post.id}
      className={isFeatured ? styles.featuredPostCard : styles.postCard}
    >
      <div className={styles.postImageContainer}>
        <Image
          src={post.imagePath || "/blog/default-post.jpg"}
          alt={post.title}
          className={styles.postImage}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className={styles.categoryBadge}>{post.category}</span>
      </div>
      <div className={styles.postContent}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className={styles.postMeta}>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className={styles.headFiller}></div>
      <div className={styles.blogHeader}>
        <div className={styles.headerContent}>
          <h1>Word Experts Australia Blog</h1>
          <p>Expert tutorials, tips, and best practices for Microsoft Word</p>
        </div>
      </div>

      <div className={styles.blogContainer}>
        {/* Featured posts section */}
        {featuredPosts.length > 0 && (
          <section className={styles.featuredSection}>
            <h2>Featured Articles</h2>
            <div className={styles.featuredGrid}>
              {featuredPosts.map((post) => renderPostCard(post, true))}
            </div>
          </section>
        )}

        {/* Search and filter section */}
        <section className={styles.filterSection}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <svg
              className={styles.searchIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.categoryButton} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All posts section */}
        <section className={styles.allPostsSection}>
          <h2>All Articles</h2>
          {filteredPosts.length === 0 ? (
            <div className={styles.noResults}>
              <p>
                No articles found matching your criteria. Please try a different
                search term or category.
              </p>
            </div>
          ) : (
            <div className={styles.postsGrid}>
              {filteredPosts.map((post) => renderPostCard(post))}
            </div>
          )}
        </section>
        <div className={styles.ctaContainer}>
          <CTAMain />
        </div>
      </div>

      <Contact />
    </>
  );
};

export default BlogPage;
