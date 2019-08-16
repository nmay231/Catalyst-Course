import * as React from 'react'
import TagBox from './TagBox'
import { Link } from 'react-router-dom'

interface IViewBlog {
    blog: Blog,
    preview?: boolean,
}

const ViewBlog: React.FC<IViewBlog> = ({ blog, preview = true }) => {

    const contentStyle = preview && { height: 200, overflow: 'hidden' }
    if (!blog.tagList) {
        blog.tagList = []
    }

    if (preview) {
        return (
            <div className="col-lg-6">
                <article className="card my-2 mx-n1 shadow" style={{ height: 450 }}>
                    <div className="card-header">
                        <h3 className="card-title ml-4">{blog.title}</h3>
                        <small className="text-muted ml-auto">by {blog.authorName}</small>
                        <TagBox tags={blog.tagList} />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <div className="card-text text-wrap mt-3" style={contentStyle}>{blog.content}</div>
                        <Link to={`/view/${blog.id}`}
                            className="btn btn-light align-self-center mt-auto">Read More</Link>
                    </div>
                </article>
            </div>
        )
    } else {
        return (
            <div className="col-12">
                <article className="card my-5 shadow-lg rounded-lg">
                    <div className="card-header">
                        <h3 className="card-title ml-5 mt-2">{blog.title}</h3>
                        <small className="text-muted ml-auto mr-lg-5">by {blog.authorName}</small>
                        <TagBox tags={blog.tagList} />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <p className="card-text text-wrap my-3 ml-3">{blog.content}</p>
                    </div>
                </article>
            </div>
        )
    }
}

export default ViewBlog
