import React, { useContext, useState } from 'react'
import { Context } from "../pages/Context"

export default function FullTimeJobs() {
    const {state, dispatch} = useContext(Context)
    const {jobs} = state
    const [isChecked, setIsChecked] = useState(false)
    console.log(jobs);

    function handleCheckboxLocation() {
        const fullTimeJobs = jobs.filter(job => job.type === "Contract")
        setIsChecked(!isChecked)
        dispatch({type:"SEARCH_FULL_TIME_JOB", value: fullTimeJobs})
    }

    return (
        <div>
             <fieldset>
               <input 
               type="checkbox" 
               checked={isChecked}
               onChange={handleCheckboxLocation}/>
               <label>Full time</label>
            </fieldset>
        </div>
    )
}
