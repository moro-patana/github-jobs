import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function FullTimeJobs() {
    const {jobs} = useContext(Context)
    const fullTimeJobs = jobs.filter(job => job.type === "Full Time")
    console.log(fullTimeJobs)
    return (
        <div>
             <fieldset>
               <input type="checkbox"/>
               <label>Full time</label>
            </fieldset>
        </div>
    )
}
