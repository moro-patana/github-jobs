import React from 'react'
import Header from "../components/Header"
import SearchJobs from "../components/SearchJobs"
// import SearchByLocation from "../components/SearchByLocation"
// import FullTimeJobs from "../components/FullTimeJobs"
import JobsList from "../components/JobsList"

export default function App() {
    return (
        <div>
            <Header/>
            <SearchJobs/>
            {/* <FullTimeJobs/>
            <SearchByLocation/> */}
            <JobsList/>
        </div>
    )
}
