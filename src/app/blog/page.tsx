import { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog - Dr. Y Physio",
  description: "Latest updates, articles, and health tips from Dr. Y Physio.",
};

const blogPosts = [
  {
    id: 1,
    title: "How Physiotherapy Can Help with Back Pain",
    snippet:
      "Back pain can be debilitating, but physiotherapy offers effective solutions to manage and overcome pain.",
    date: "2023-07-15",
    slug: "physiotherapy-back-pain",
  },
  {
    id: 2,
    title: "Benefits of Home Visit Physiotherapy",
    snippet:
      "Discover the convenience and personalized care of receiving physiotherapy at your home.",
    date: "2023-06-10",
    slug: "benefits-home-visit-physiotherapy",
  },
  {
    id: 3,
    title: "Online Consultation: A New Era of Physiotherapy",
    snippet:
      "Learn how online consultations are revolutionizing access to physiotherapy services and improving patient outcomes.",
    date: "2023-05-05",
    slug: "online-consultation-physiotherapy",
  },
];

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <p className={styles.pageDescription}>
        Read our latest articles and health tips from the experts at Dr. Y
        Physio.
      </p>
      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <p className={styles.postDate}>{post.date}</p>
            <p className={styles.postSnippet}>{post.snippet}</p>
            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
