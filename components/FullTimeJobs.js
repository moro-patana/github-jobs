import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function FullTimeJobs() {
    const {fullTimeJobs} = useContext(Context)
    return (
        <div>
             <fieldset>
               <input type="checkbox"/>
               <label>Full time</label>
            </fieldset>
        </div>
    )
}
