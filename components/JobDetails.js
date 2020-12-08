import React, { useContext } from "react"
import { Context } from "../pages/Context"
import { Link, useParams } from "react-router-dom"
function JobDetails() {
    const { state, dispatch } = useContext(Context)
    const { jobs } = state
    const { jobId } = useParams()
    const job = jobs.find(job => job.id === jobId)

    return (
        <div>
            <Link to="/">⬅Back to search</Link>
            <h2>How to apply</h2>
            <div>
                <p>Please email a copy of your resume and online portfolio to <a href="/wes">wes@kasisto.com</a> & CC <a href="/eric">eric@kasisto.com</a></p>
            </div>
            <article key={job?.id} className="jobs-details">
                <img className="company-logo" src={job?.company_logo} alt={job?.company} />
                <div className="about-job">
                    <div>
                        <h3>{job?.company}</h3>
                        <p>{job?.title}</p>
                        <button>{job?.type}</button>
                    </div>
                    <div>
                        <span>{job?.location}</span>
                        <span>{job?.created_at}</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{
                    __html: job?.description
                }}></div>
            </article>
        </div>

    )
}
export default JobDetails;