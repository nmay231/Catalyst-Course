import * as React from 'react'

interface IBottom {}

const Bottom: React.FC<IBottom> = ({children}) => {
    return (
        <div className="fixed-bottom d-flex">
            {children}
        </div>
    )
}

export default Bottom