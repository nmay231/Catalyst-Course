import * as React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps, withRouter } from 'react-router'
import Axios from 'axios'

import { BLOGS_API, join } from '../utils/apis'
import TagBox from '../components/TagBox'
import MarkDown from '../components/MarkDown'

const ViewBlogPage: React.FC<RouteComponentProps<{ blogid: string }>> = ({ match, history }) => {

    let id = parseInt(match.params.blogid)
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

    const handleDelete: React.MouseEventHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (confirm('Are you sure you want to delete this blog post? There is no going back...')) {
            Axios.delete(join(BLOGS_API, id.toString()))
            history.push('/')
        }
    }

    return (
        <section className="row">
            <div className="col-12">
                <article className="card my-5 shadow-lg rounded-lg">
                    <div className="card-header d-flex flex-column">
                        <h3 className="card-title ml-5 mt-2">{blog.title}</h3>
                        <small className="text-muted ml-auto mr-md-5">
                            by {blog.authorName} &mdash;
                            <Link to={`/edit/${blog.id}`} className="ml-2">edit</Link>,
                            <a onClick={handleDelete} className="ml-2" href="">delete</a>
                        </small>
                        <TagBox tags={blog.tagList} />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <div className="card-text text-wrap my-3 ml-3">
                            <MarkDown content={blog.content} />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default withRouter(ViewBlogPage)
