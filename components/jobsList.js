import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import { Link } from "react-router-dom"
import SearchJobs from "../components/SearchJobs"
import FullTimeJobs from "../components/FullTimeJobs"
import SearchByLocation from "../components/SearchByLocation"


export default function JobsList() {
    const { state, dispatch } = useContext(Context)
    const { jobs, loading } = state
    console.log(jobs);
    return (
        <div>
            <SearchJobs/>
            <FullTimeJobs/>
            <SearchByLocation/>
            {loading && <p>Loading...</p>}
            {!loading && jobs && (
                <div>
                    {jobs.map(job => (
                        <Link to={`/job/${job.id}`} key={job.id}>
                            <article key={job.id} className="jobs-list">
                                <img className="company-logo" src={job.company_logo} alt={job.company} />
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
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
