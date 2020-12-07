import React, { useState, useEffect } from 'react'
const Context = React.createContext()
const JOBS_API = " https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description"
function ContextProvider({children}) {
    const [jobs, setJobs] = useState([])
    console.log(jobs);

    async function fetchData() {
        const response = await fetch(JOBS_API)
        const data = await response.json()
        setJobs(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Context.Provider
        value={{jobs}}
        >
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
