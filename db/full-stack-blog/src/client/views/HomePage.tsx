import * as React from 'react'
import axios from 'axios'

import { BLOGS_API } from '../utils/apis'
import ViewBlog from '../components/ViewBlog'

const HomePage: React.FC = () => {
    const [blogs, setBlogs] = React.useState<Blog[]>([])

    React.useEffect(() => {
        (async () => {
            try {
                let rawBlogs: Blog[] = (await axios.get<Blog[]>(BLOGS_API)).data
                setBlogs(rawBlogs.map(b => ({
                    ...b,
                    tagList: b.tags ? b.tags.split(';;') : [],
                })))
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])

    return (
        <section className="row">
            <h1 className="text-center col-12 my-5">Blog Posts</h1>
            {blogs.map((blog) => <ViewBlog key={blog.id} blog={blog} preview />)}
        </section>
    )
}

export default HomePage
