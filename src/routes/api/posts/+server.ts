import type { Post } from "$lib/types"
import { json } from "@sveltejs/kit"

// gets list of posts
async function getPosts() {
    let posts: Post[] = []

    //returns a dict in format "path": "file data"
    const files = import.meta.glob("$lib/posts/*.md", { eager: true })

    for (const path in files) {

        //get file of given path
        const file = files[path]
        // console.log(file)
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post

            // add if published
            post.published && posts.push(post)
        }
    }

    //sort by newest first
    posts = posts.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    return posts
}

//define an endpoint
export async function GET() {
    const posts = await getPosts()
    return json(posts)
}