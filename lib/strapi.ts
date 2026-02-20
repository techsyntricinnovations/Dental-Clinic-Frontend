const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getBlogs() {
    try {
        const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
            cache: 'no-store' // or use revalidate
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching blogs from Strapi:", error);
        return [];
    }
}

export async function getBlogBySlug(slug: string) {
    try {
        const response = await fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
            cache: 'no-store'
        });
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error(`Error fetching blog with slug ${slug}:`, error);
        return null;
    }
}
