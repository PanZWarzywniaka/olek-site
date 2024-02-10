import { error } from "@sveltejs/kit"

export async function load({ params }) {

    try {
        console.log(`Slug is: ${params.slug}`)

        //Import requested post
        const post = await import(`../../../lib/posts/${params.slug}.md`)

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`)
    }
}