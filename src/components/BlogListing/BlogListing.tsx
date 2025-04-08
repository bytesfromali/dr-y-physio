"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { decode } from "html-entities";
import styles from "@/app/blogs/blogs.module.css";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  excerpt: { rendered: string };
}

interface BlogListingProps {
  posts: Post[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  // We'll start by showing 9 posts
  const initialCount = 9;
  const loadCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query; use title (and optionally excerpt)
  const filteredPosts = posts.filter((post) =>
    decode(post.title.rendered).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const postsToShow = filteredPosts.slice(0, visibleCount);

  // Infinite Scroll: Listen to scroll event, load more posts when near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        visibleCount < filteredPosts.length
      ) {
        setVisibleCount((prev) => prev + loadCount);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleCount, filteredPosts.length]);

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search posts..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            // Reset visible count on new search
            setVisibleCount(initialCount);
          }}
        />
      </div>
      <section className={styles.postsGrid}>
        {postsToShow.map((post, index) => (
          <motion.article
            key={post.id}
            className={styles.postCard}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            {/* Featured image should be rendered inside a fixed-size container */}
            <div className={styles.featuredImageWrapper}>
              <img
                src="/images/placeholder-featured.jpg"
                // Replace placeholder with dynamic logic if WP returns a featured image.
                alt={decode(post.title.rendered)}
                className={styles.featuredImage}
              />
            </div>
            <h2 className={styles.postTitle}>
              <Link href={`/blogs/${post.slug}`}>{decode(post.title.rendered)}</Link>
            </h2>
            <p className={styles.postDate}>
              {new Date(post.date).toLocaleDateString()}
            </p>
            <div
              className={styles.postExcerpt}
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered || "" }}
            />
            <Link href={`/blogs/${post.slug}`} className={styles.readMore}>
              Read More
            </Link>
          </motion.article>
        ))}
      </section>
    </>
  );
}
