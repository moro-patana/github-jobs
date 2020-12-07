import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function JobsList() {
    const {jobs} = useContext(Context)
    return (
        <div>
            {jobs.map(job => (
                <article key={job.id}>
                    <img src={job.company_logo} alt={job.company}/>
                    <div>
                        <h3>{job.company}</h3>
                        <p>{job.title}</p>
                        <button>{job.type}</button>
                    </div>
                    <div>
                        <span>{job.location}</span>
                        <span>{job.created_at}</span>
                    </div>
                </article>
            ))}
        </div>
    )
}
