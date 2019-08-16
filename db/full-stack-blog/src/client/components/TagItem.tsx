import * as React from 'react'

interface ITagItem {
    text: string,
    removeCallback?: (...args: any[]) => any
}

const TagItem: React.FC<ITagItem> = ({ text, removeCallback }) => {
    return (
        <span className="px-3 py-1 mx-2 my-1 text-nowrap border border-dark rounded-pill bg-light">
            {text}
            {removeCallback && <span className="ml-1 mr-n1" onClick={removeCallback} style={{ cursor: 'pointer' }}> &times; </span>}
        </span>
    )
}

export default TagItem
