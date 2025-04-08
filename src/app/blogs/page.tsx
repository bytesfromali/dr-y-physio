// src/app/blogs/page.tsx
import { Metadata } from "next";
import styles from "./blogs.module.css";
import { getPosts } from "@/lib/api";
import BlogListing from "@/components/BlogListing/BlogListing";

export const metadata: Metadata = {
  title: "Blog - Dr. Y Physio: Expert Physiotherapy Insights in Noida",
  description:
    "Read the latest expert tips, success stories, and treatment insights from Dr. Y Physio, a leading physiotherapy clinic in Noida.",
};

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <div className={styles.blogPage}>
      <main className={styles.blogPageContainer}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>Blog</h1>
          <p className={styles.pageDescription}>
            Stay updated with expert physiotherapy tips and insights from Dr. Y
            Physio in Noida.
          </p>
        </header>
        <BlogListing posts={posts} />
      </main>
    </div>
  );
}
