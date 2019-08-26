import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

import { join, BLOGS_API, AUTHORS_API } from '../utils/apis'
import useLogin from '../utils/useLogin'
import ViewBlog from '../components/ViewBlog'
import Form from '../components/commons/Form'
import FormField from '../components/commons/FormField'
import SearchTag from '../components/SearchTag'

interface IWriteBlogPage extends RouteComponentProps<{ blogid?: string }> { }

const WriteBlogPage: React.FC<IWriteBlogPage> = ({ history, match }) => {

    const { user, json } = useLogin()

    if (user.authorid === -1) {
        history.replace('/login')
        return <></>
    }

    let blogid = match.params.blogid
    const [authorName, setAuthorName] = React.useState('')

    const [title, setTitle] = React.useState('Amazing Title')
    const [tagList, setTagList] = React.useState<string[]>(['cool', 'neat'])

    const [content, setContent] = React.useState(`This blog supports Markdown
===
* All of the advantages of markdown: *readability*, **simplicity**
* Lists
    1. Sublists! \`Waaat!?!\`
* And of course emojis! :astonished: :tada: :+1:
`)

    React.useEffect(() => {
        if (!user.authorid || user.authorid === -1) {
            return
        } else if (!blogid) {
            (async () => {
                let author = await json<IAuthor>(join(AUTHORS_API, `${user.authorid}`))
                setAuthorName(author.name)
            })()
        } else {
            (async () => {
                try {
                    let blog = await json<IBlog>(join(BLOGS_API, `${blogid}`))
                    if (blog.authorid !== user.authorid) {
                        return history.replace('/')
                    }
                    setAuthorName(blog.authorName)
                    setTitle(blog.title)
                    setContent(blog.content)
                    setTagList(blog.tags.split(';;'))
                } catch (err) {
                    console.log(err)
                }
            })()
        }
    }, [blogid, user.authorid])

    const postBlog = async () => {
        try {
            let body = { authorid: user.authorid, title, content, tags: tagList }
            if (blogid) {
                await json(join(BLOGS_API, `${blogid}`), 'PUT', body)
            } else {
                await json(BLOGS_API, 'POST', body)
            }
            history.push('/')
        } catch (err) {
            console.error(err)
        }
    }

    if (!user.authorid) {
        return (
            <div className="spinner-border mt-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <section className="row d-flex mt-5">
            <Form submitText="Post Blog" action={postBlog}
                className="col-lg-6 col-12 border rounded mx-auto mt-2 mb-n1" >
                <FormField state={[title, setTitle]} name="Title" />
                <SearchTag state={[tagList, setTagList]} hidden />
                <FormField state={[content, setContent]} name="Post Content" type="textarea" />
            </Form>
            <ViewBlog blog={{ id: null, tags: null, authorid: user.authorid, authorName: authorName || '...', title, content, tagList }}
                preview={false}
                className="col-lg-6 col-12" />
        </section>
    )
}

export default withRouter(WriteBlogPage)
