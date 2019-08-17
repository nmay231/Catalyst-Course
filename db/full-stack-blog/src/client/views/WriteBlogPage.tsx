import * as React from 'react'
import Axios from 'axios'
import { USERS_API, join, BLOGS_API } from '../utils/apis'
import ViewBlog from '../components/ViewBlog'
import { withRouter, RouteComponentProps } from 'react-router'
import Form from '../components/Form'
import FormField from '../components/FormField'
import TagBox from '../components/TagBox'
import SearchTag from '../components/SearchTag'

interface IWriteBlogPage extends RouteComponentProps {
    authorid: number | null,
}

const WriteBlogPage: React.FC<IWriteBlogPage> = ({ authorid, history }) => {

    if (authorid === -1) {
        history.replace('/login/as/luke')
        return <></>
    }

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
                setAuthor((await Axios.get<IAuthor>(join(USERS_API, `${authorid}`))).data)
            })()
        }
    }, [authorid])

    const postBlog = () => {
        Axios.post<IAuthor>(BLOGS_API, {
            authorid,
            title,
            content,
            tags: tagList,
        }).then(() => history.push('/'))
            .catch((err) => console.error(err))
    }

    if (!authorid) {
        return (
            <div className="spinner-border mt-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    return (
        <section className="row d-flex align-items-stretch">
            <Form submitText="Post Blog" action={postBlog}
                className="col-lg-6 col-12 border rounded mx-auto mt-5 mb-n1" >
                <FormField state={[title, setTitle]} name="Title" />
                {/* <FormField state={[tagSearch, setTagSearch]} name="Search for tags" /> */}
                {/* <FormField state={[tags, setTags]} name="Tags" transform={findTags} /> */}
                {/* <TagBox tags={['searching', 'tagbox', '(get this working)']} /> */}
                {/* <TagBox tags={toList(tags)} /> */}
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
