// src/lib/api.ts
export async function getPosts() {
  const res = await fetch("https://blog.dryphysio.com/wp-json/wp/v2/posts?_embed");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`https://blog.dryphysio.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  const posts = await res.json();
  return posts[0];
}
