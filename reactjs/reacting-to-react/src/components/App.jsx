// App.jsx
import React from 'react'

// Old, still renders exactly like this
// let App = (props) => {
//     return (
//         <h1>{props.message}</h1>
//     )
// }

let App = (props) => {
    alert('Never pulls up')
    return (
        <h1>{props.message + 'your face'}</h1>
    )
}

export default App