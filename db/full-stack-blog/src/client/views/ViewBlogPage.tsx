import * as React from 'react'
import ViewBlog from '../components/ViewBlog'
import { RouteComponentProps } from 'react-router'
import Axios from 'axios'
import { BLOGS_API, join } from '../utils/apis';

const ViewBlogPage: React.FC<RouteComponentProps<{ blogid: string }>> = ({ match: { params: { blogid } } }) => {
    let id = parseInt(blogid)
    const [blog, setBlog] = React.useState<Blog>({
        id: null,
        authorid: null,
        authorName: '',
        content: '',
        title: '',
        tags: null,
        tagList: [],
    })

    React.useEffect(() => {
        (async () => {
            try {
                let rawBlog: Blog = (await Axios.get<Blog>(join(BLOGS_API, `${id}`))).data
                setBlog(rawBlog.tags ? { ...rawBlog, tagList: rawBlog.tags.split(';;') } : { ...rawBlog, tagList: [] })
            } catch (err) {
                console.error(err)
            }
        })()
    }, [id])

    return (
        <section className="row">
            <ViewBlog blog={blog} preview={false} />
        </section>
    )
}

export default ViewBlogPage
