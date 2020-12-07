import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../pages/Context"

export default function SearchByLocation() {
    const {jobs, setJobs,cities} = useContext(Context)
    const [location, setLocation] = useState("")
    const locationList = [
        "London",
        "Berlin",
        "New York",
        "Amsterdam"
    ]
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
                {locationList.map(location => (
                    <fieldset key={location}>
                        <input type="checkbox"/>
                        <label>{location}</label>
                    </fieldset>
                ))}
            </div>
        </div>
    )
}
