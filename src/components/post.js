import React from "react"

const Post = (props) => {
    return (
        <li>
            <h4>{props.info.title}</h4>
            <small>{props.info.pay}</small>
            <p>{props.info.description}</p>
            <small>{props.info.interested.length} dinos are interested in this job.</small>
        </li>
    )
}

export default Post