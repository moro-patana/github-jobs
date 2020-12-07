import React, { useContext, useState } from 'react'
import { Context } from "../pages/Context"
export default function SearchJobs() {
    const {jobs, setJobs} = useContext(Context)
    const [searchForJob, setSearchForJob] = useState("")

    function searchForJobInput(e) {
        e.preventDefault()
        const filteredJobByName = jobs.filter(job => job.title.toLowerCase().includes(searchForJob))
        console.log(filteredJobByName)
        setJobs(filteredJobByName)
    }
    return (
        <div className="search-jobs">
            <form className="form-input" onSubmit={searchForJobInput}>
                <input
                type="text"
                placeholder="Title, companies, expertise or benefits"
                value={searchForJob}
                onChange={(e) => setSearchForJob(e.target.value)}
                />
                <button className="search-button">Search</button>
            </form>
        </div>
    )
}
