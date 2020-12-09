import React from 'react'
import Header from "../components/Header"
import SearchJobs from "../components/SearchJobs"
import JobsList from "../components/JobsList"
import JobDetails from "../components/JobDetails"
import {Switch, Route} from "react-router-dom"

export default function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/"><JobsList/></Route>
                <Route path="/job/:jobId"><JobDetails/></Route>
            </Switch>
        </div>
    )
}
