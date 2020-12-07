import React, { useState, useEffect } from 'react'
const Context = React.createContext()
const JOBS_API = " https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description"
function ContextProvider({children}) {
    const [jobs, setJobs] = useState([])
    const [fullTimeJobs, setFullTimeJobs] = useState([])
    const [isChecked, setIsChecked] = useState(false)
    const filterFullTimeJobs = jobs.filter(job => job.type === "Full Time")
    console.log(filterFullTimeJobs)

    async function fetchData() {
        const response = await fetch(JOBS_API)
        const data = await response.json()
        setJobs(data)
    }
    useEffect(() => {
        fetchData()
        setFullTimeJobs(filterFullTimeJobs)
    }, [])
    function handleCheckbox() {
        setJobs(filterFullTimeJobs)
        setIsChecked(!isChecked)
    }
    return (
        <Context.Provider
        value={{jobs, fullTimeJobs, handleCheckbox,isChecked, setIsChecked}}
        >
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
