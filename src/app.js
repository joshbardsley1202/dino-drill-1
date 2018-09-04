import React, {Component} from "react"
import Header from "./components/header"
import Footer from "./components/footer";
import JobForm from "./components/jobform";
import JobList from "./components/joblist";



class App extends Component {


constructor(props) {
    super(props)
    this.state = {
        jobs: []
    }
}

addSubmitEvent = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const newJob = {
        title: formData.get("title"),
        pay: formData.get("pay"),
        description: formData.get("description"),
        interested: []
    }
    this.setState({jobs: [newJob, ...this.state.jobs]})
}

componentDidMount() {
    fetch("./listings.json")
    .then(data => data.json())
    .then(dataJSON => {
        dataJSON.reverse()
        this.setState({jobs:dataJSON})})
}
render() {
    
    
    return (
<div>
<Header something={this.toDoSomething}/>
<main>
    <JobList post = {this.state.jobs} />
    <JobForm form = {this.addSubmitEvent}/>
</main>
<Footer />
</div>
    )
}
}

export default App
