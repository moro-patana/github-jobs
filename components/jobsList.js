import React, { useContext } from 'react'
import { Context } from "../pages/Context"
import { Link } from "react-router-dom"
import SearchJobs from "../components/SearchJobs"
import SearchByLocation from "../components/SearchByLocation"


export default function JobsList() {
    const { state, dispatch } = useContext(Context)
    const { jobs, loading } = state
    return (
        <div>
            <SearchJobs/>
            <div className="jobs">
                <SearchByLocation/>
                {loading && <p>Loading...</p>}
                {!loading && (
                    <div>
                        {jobs.map(job => (
                            <Link to={`/job/${job.id}`} key={job.id}>
                                <article key={job.id} className="jobs-list">
                                    <img className="company-logo" src={job.company_logo} alt={job.company} />
                                    <div className="about-job">
                                        <div>
                                            <h3>{job.company}</h3>
                                            <p className="title">{job.title}</p>
                                            <button className="type">{job.type}</button>
                                        </div>
                                        <div className="more">
                                            <div className="city">
                                                <i className="ri-earth-line"></i>
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="created">
                                                <i className="ri-time-line"></i>
                                                <span>{new Date(job?.created_at).toLocaleDateString()}</span>
                                            </div>
                                        </div>
    
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
