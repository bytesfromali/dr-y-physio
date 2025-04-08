// src/app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { decode } from "html-entities";
import { getPostBySlug, getPosts } from "@/lib/api";
import styles from "./post.module.css";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return {
    title: decode(post.title.rendered),
    description: post.excerpt.rendered.replace(/<[^>]*>/g, ""),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  // Retrieve featured image from _embedded if available
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // For related posts, a simple approach: fetch all posts, filter out the current one, and take the first 3.
  let allPosts = await getPosts();
  const relatedPosts = allPosts
    .filter((p: any) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <main className={styles.postPage}>
      <header className={styles.heroHeader}>
        {featuredImage && (
          <div className={styles.heroBackground}>
            <Image
              src={featuredImage}
              alt={decode(post.title.rendered)}
              fill
              quality={90}
              className={styles.heroImage}
            />
          </div>
        )}
        <div className={styles.heroContent}>
          <h1 className={styles.postTitle}>{decode(post.title.rendered)}</h1>
        </div>
      </header>
      <article className={styles.postContentWrapper}>
        <p className={styles.postDate}>
          {new Date(post.date).toLocaleDateString()}
        </p>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content.rendered || "" }}
        />
      </article>
      <section className={styles.relatedPosts}>
        <h2 className={styles.relatedTitle}>Related Posts</h2>
        <div className={styles.relatedGrid}>
          {relatedPosts.map((rPost: any) => (
            <div key={rPost.id} className={styles.relatedCard}>
              {rPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                <Image
                  src={rPost._embedded["wp:featuredmedia"][0].source_url}
                  alt={decode(rPost.title.rendered)}
                  width={300}
                  height={200}
                  className={styles.relatedImage}
                  quality={80}
                />
              ) : (
                <div className={styles.relatedPlaceholder}>No Image</div>
              )}
              <h3 className={styles.relatedPostTitle}>
                <Link href={`/blogs/${rPost.slug}`}>
                  {decode(rPost.title.rendered)}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </section>
      <div className={styles.backContainer}>
        <Link href="/blogs" className={styles.backLink}>
          &larr; Back to Blog
        </Link>
      </div>
    </main>
  );
}
