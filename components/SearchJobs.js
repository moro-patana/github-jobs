import React, { useContext, useState } from 'react'
import { Context } from "../pages/Context"
export default function SearchJobs() {
    const {state, dispatch} = useContext(Context)
    const {jobs} = state
    const [searchForJob, setSearchForJob] = useState("")

    function searchForJobInput(e) {
        e.preventDefault()
        const filteredJobByName = jobs.filter(job => job.title.toLowerCase().includes(searchForJob))
        dispatch({type: "SEARCH_JOB_BY_NAME", value: filteredJobByName})
        setSearchForJob("")
    }
    return (
        <div className="search-jobs">
            <form className="form-input" onSubmit={searchForJobInput}>
                <i className="ri-earth-line"></i>
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
