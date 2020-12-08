import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function JobsList() {
    const {state} = useContext(Context)
    const {jobs, loading} = state
    console.log(jobs);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && jobs && 
            (<div>
            {jobs.map(job => (
                <article key={job.id} className="jobs-list">
                    <img className="company-logo" src={job.company_logo} alt={job.company}/>
                    <div className="about-job">
                        <div>
                            <h3>{job.company}</h3>
                            <p>{job.title}</p>
                            <button>{job.type}</button>
                        </div>
                        <div>
                            <span>{job.location}</span>
                            <span>{job.created_at}</span>
                        </div>
     
                    </div>
                </article>
            ))}
            </div>)}
        </div>
    )
}
