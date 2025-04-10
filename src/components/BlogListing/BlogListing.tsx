"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { decode } from "html-entities";
import styles from "@/app/blogs/blogs.module.css";
import Image from "next/image";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  date: string;
  excerpt: { rendered: string };
  _embedded?: { [key: string]: any };
}

interface BlogListingProps {
  posts: Post[];
}

export default function BlogListing({ posts }: BlogListingProps) {
  const initialCount = 9;
  const loadCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on the search query using the decoded title.
  const filteredPosts = posts.filter((post) =>
    decode(post.title.rendered)
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const postsToShow = filteredPosts.slice(0, visibleCount);

  // Infinite scrolling
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
            setVisibleCount(initialCount);
          }}
        />
      </div>
      <section className={styles.postsGrid}>
        {postsToShow.map((post, index) => {
          // Try to get the featured image from _embedded
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
          return (
            <motion.article
              key={post.id}
              className={styles.postCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className={styles.featuredImageWrapper}>
                {featuredImage ? (
                  <Image
                    src={featuredImage}
                    alt={decode(post.title.rendered)}
                    className={styles.featuredImage}
                    width={500} // set appropriate width
                    height={450} // set appropriate height
                    quality={90} // optional: adjust quality if needed
                  ></Image>
                ) : (
                  <Image
                    src={"/images/dry-physio-team.jpeg"}
                    alt={decode(post.title.rendered)}
                    className={styles.featuredImage}
                    width={500} // set appropriate width
                    height={450} // set appropriate height
                    quality={90} // optional: adjust quality if needed
                  ></Image>
                )}
              </div>
              <h2 className={styles.postTitle}>
                <Link href={`/blogs/${post.slug}`}>
                  {decode(post.title.rendered)}
                </Link>
              </h2>
              <p className={styles.postDate}>
                {new Date(post.date).toLocaleDateString()}
              </p>
              <div
                className={styles.postExcerpt}
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered || "",
                }}
              />
              <div className={styles.postReadMore}>
                <Link href={`/blogs/${post.slug}`} className={styles.readMore}>
                  Read More
                </Link>
              </div>
            </motion.article>
          );
        })}
      </section>
    </>
  );
}
