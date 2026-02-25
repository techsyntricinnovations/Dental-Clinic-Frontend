const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function getBlogs() {
    try {
        const response = await fetch(`${STRAPI_URL}/api/blogs?populate=*`, {
            cache: 'no-store'
        });
        if (!response.ok) throw new Error('Failed to fetch blogs');
        const data = await response.json();

        // Strapi 5 returns { data: [...] } where e ach item is flat (no .attributes)
        return data.data || [];
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
        if (!response.ok) throw new Error('Failed to fetch blog');
        const data = await response.json();

        // Strapi 5 returns { data: [...] }
        return (data.data && data.data.length > 0) ? data.data[0] : null;
    } catch (error) {
        console.error(`Error fetching blog with slug ${slug}:`, error);
        return null;
    }
}

