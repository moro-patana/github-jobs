import React, { useContext } from 'react'
import { Context } from "../pages/Context"

export default function FullTimeJobs() {
    const {handleCheckbox, isChecked} = useContext(Context)
    return (
        <div>
             <fieldset>
               <input 
               type="checkbox" 
               checked={isChecked}
               onChange={handleCheckbox}/>
               <label>Full time</label>
            </fieldset>
        </div>
    )
}
