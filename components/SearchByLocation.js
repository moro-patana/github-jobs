import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../pages/Context"
import CheckboxeCity from "../components/CheckboxCity"
import FullTimeJobs from "../components/FullTimeJobs"

export default function SearchByLocation() {
    const {state, dispatch} = useContext(Context)
    const {jobs} = state
    const [location, setLocation] = useState("")
    const mapLocation = jobs.map(job => job.location)
    // console.log(mapLocation);
    const filterLocation = mapLocation.filter((location, index) => {
            return mapLocation.indexOf(location) === index;
        })
        console.log(filterLocation);
    return (
        <div>
            <FullTimeJobs/>
            <form className="search-city">
                <label>Location</label>
                <fieldset>
                <i className="ri-earth-line"></i>
                    <input 
                    type="text" 
                    placeholder="City, state, zip code or country"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </fieldset>
            </form>
            <CheckboxeCity/>
        </div>
    )
}
