import React from 'react'

export default function index(props) {
    console.log(props)
    props.staticContext && (props.staticContext.resCode = 404)
    return (
        <div>
            404 NOT FOUND
        </div>
    )
}
