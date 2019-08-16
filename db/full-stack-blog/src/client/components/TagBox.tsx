import * as React from 'react'

import TagItem from './TagItem'

interface ITagBox {
    tags: string[],

}

const TagBox: React.FC<ITagBox> = ({ tags }) => {
    return (
        <div className="d-flex flex-row">
            {tags.map(t => <TagItem key={t} text={t} />)}
        </div>
    )
}

export default TagBox
