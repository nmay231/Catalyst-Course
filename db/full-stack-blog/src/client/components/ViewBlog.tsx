import * as React from 'react'
import TagBox from './TagBox'
import { Link } from 'react-router-dom'
import MarkDown from './MarkDown'

interface IViewBlog {
    blog: Blog,
    preview?: boolean,
    className?: string,
}

const ViewBlog: React.FC<IViewBlog> = ({ blog, preview = true, className }) => {

    const contentStyle = preview && { height: 200, overflow: 'hidden' }
    if (!className) {
        className = preview ? 'col-lg-6' : 'col-12'
    }
    if (!blog.tagList) {
        blog.tagList = []
    }

    if (preview) {
        return (
            <div className={className}>
                <article className="card my-2 mx-n1 shadow" style={{ height: 450 }}>
                    <div className="card-header d-flex flex-column">
                        <h3 className="card-title ml-4">{blog.title}</h3>
                        <small className="text-muted ml-auto">by {blog.authorName}</small>
                        <TagBox tags={blog.tagList} />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <div className="card-text text-wrap mt-3" style={contentStyle}>
                            <MarkDown content={blog.content} />
                        </div>
                        <Link to={`/view/${blog.id}`}
                            className="btn btn-light align-self-center mt-auto">Read More</Link>
                    </div>
                </article>
            </div>
        )
    } else {
        return (
            <div className={className}>
                <article className="card my-5 shadow-lg rounded-lg">
                    <div className="card-header d-flex flex-column">
                        <h3 className="card-title ml-5 mt-2">{blog.title}</h3>
                        <small className="text-muted ml-auto mr-lg-5">
                            by {blog.authorName} &mdash;
                            <Link to={`/edit/${blog.id}`} className="mx-1">edit</Link>,
                            <Link to={`/delete/${blog.id}`} className="mx-1">delete</Link>
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
        )
    }
}

export default ViewBlog
