const WP_API = "https://acrooc.com/wp-json/wp/v2";

export async function getAllPages() {
  const res = await fetch(`${WP_API}/pages`);
  const pages = await res.json();
  return pages;
}

export async function getPageBySlug(slug: string) {
  const res = await fetch(`${WP_API}/pages?slug=${slug}`);
  const pages = await res.json();
  return pages[0];
} 