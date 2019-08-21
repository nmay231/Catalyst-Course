import * as React from 'react'
import { Link } from 'react-router-dom'

import TagBox from './TagBox'
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

    return (
        <div className={className}>
            <article className="card my-2 shadow rounded-lg" style={preview ? { height: 450 } : {}}>
                <div className="card-header d-flex flex-column">
                    <h3 className="card-title ml-4 mt-2">{blog.title}</h3>
                    <small className="text-muted ml-auto mr-lg-5">
                        by {blog.authorName}
                    </small>
                    <TagBox tags={blog.tagList} />
                </div>
                <div className="card-body d-flex flex-column">
                    <div className="card-text text-wrap my-3" style={preview ? contentStyle : {}}>
                        <MarkDown content={blog.content} />
                    </div>
                    {preview && <Link to={`/view/${blog.id}`}
                        className="btn btn-light align-self-center mt-auto">Read More</Link>}
                </div>
            </article>
        </div>
    )
}

export default ViewBlog
