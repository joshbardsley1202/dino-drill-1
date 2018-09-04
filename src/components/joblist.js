import React from "react"
import Post from "./post"


const JobList = (props) => {
    const item = props.post.map((job,index) => {
        return (<Post key={index} info={job} />)
    })
    return (
        <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
        {item}
        </ul>
      </section>
    )
}

export default JobList