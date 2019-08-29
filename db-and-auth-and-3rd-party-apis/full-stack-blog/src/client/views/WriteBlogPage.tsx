import * as React from 'react'
import Axios from 'axios'
import { AUTHORS_API, join, BLOGS_API } from '../utils/apis'
import ViewBlog from '../components/ViewBlog'
import { withRouter, RouteComponentProps } from 'react-router'
import Form from '../components/Form'
import FormField from '../components/FormField'
import SearchTag from '../components/SearchTag'

interface IWriteBlogPage extends RouteComponentProps<{ blogid: string }> {
    authorid: number | null,
}

const WriteBlogPage: React.FC<IWriteBlogPage> = ({ authorid, history, match }) => {

    if (authorid === -1) {
        history.replace('/login/as/luke')
        return <></>
    }

    let blogid = match.params.blogid

    const [author, setAuthor] = React.useState<IAuthor>({
        id: 1,
        name: 'Fake Luke Skywalker',
        email: 'lmskywalker@jediacademy.edu',
    })
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
        if (authorid) {
            (async () => {
                setAuthor((await Axios.get<IAuthor>(join(AUTHORS_API, `${authorid}`))).data)
            })()
        }
    }, [authorid])

    React.useEffect(() => {
        if (!blogid) {
            return
        }
        (async () => {
            try {
                let blog = (await Axios.get<IBlog>(join(BLOGS_API, blogid))).data
                let author = (await Axios.get<IAuthor>(join(AUTHORS_API, blog.authorid.toString()))).data
                setAuthor(author)
                setTitle(blog.title)
                setContent(blog.content)
                setTagList(blog.tags.split(';;'))
            } catch (err) {
                console.log(err)
            }
        })()
    }, [blogid])

    const postBlog = async () => {
        try {
            let body = { authorid, title, content, tags: tagList }
            if (blogid) {
                await Axios.put(join(BLOGS_API, blogid), body)
            } else {
                await Axios.post(BLOGS_API, body)
            }
            history.push('/')
        } catch (err) {
            console.error(err)
        }
    }

    if (!authorid) {
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
            <ViewBlog blog={{ id: null, tags: null, authorid, authorName: author.name, title, content, tagList }}
                preview={false}
                className="col-lg-6 col-12" />
        </section>
    )
}

export default withRouter(WriteBlogPage)
