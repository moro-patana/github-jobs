import React, { useContext } from "react"
import { Context } from "../pages/Context"
import { Link, useParams } from "react-router-dom"
function JobDetails() {
    const { state, dispatch } = useContext(Context)
    const { jobs } = state
    const { jobId } = useParams()
    const job = jobs.find(job => job.id === jobId)

    return (
        <div className="job-description">
            <Link className="back-to-search" to="/">⬅Back to search</Link>
            <h2>How to apply</h2>
            <div className="address">
                <p>Please email a copy of your resume and online portfolio to <a href="/wes">wes@kasisto.com</a> & CC <a href="/eric">eric@kasisto.com</a></p>
            </div>
            <article key={job?.id} className="jobs-details">
                <p className="title">{job?.title}</p>
                <button className="type">{job?.type}</button>
                <br></br>
                <span className="date">{new Date(job?.created_at).toLocaleDateString()}</span>
                <div className="company">
                  <img className="company-logo" src={job?.company_logo} alt={job?.company} />
                  <div className="company-info">
                      <p className="company-name">{job?.company}</p>
                      <span className="location">
                      <i className="ri-earth-line"></i>
                          {job?.location}
                      </span>
                  </div>
                </div>
                <div className="description" dangerouslySetInnerHTML={{
                    __html: job?.description
                }}></div>
            </article>
        </div>

    )
}
export default JobDetails;