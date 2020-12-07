import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../pages/Context"

export default function SearchByLocation() {
    const {jobs, setJobs,cities} = useContext(Context)
    const [location, setLocation] = useState("")
    const getLocation = jobs.map(job => job.location)
    const allLocation = getLocation.filter((location, index) => {
        return getLocation.indexOf(location) === index
    })
    console.log(allLocation);
   
    function jobsLocation(e) {
        e.preventDefault()
        const locationCity = jobs.filter(job => job.location.toLowerCase().includes(location))
        setJobs(locationCity)
    }

    return (
        <div>
            <form onSubmit={jobsLocation}>
                <label>Location</label>
                <input 
                type="text" 
                placeholder="City, state, zip code or country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
            </form>
            <div>
                {allLocation.map(job => (
                    <fieldset key={job}>
                        <input type="checkbox"/>
                        <label>{job}</label>
                    </fieldset>
                ))}
            </div>
        </div>
    )
}
