import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../pages/Context"

export default function SearchByLocation() {
    const {state, dispatch} = useContext(Context)
    const {jobs} = state
    const [location, setLocation] = useState("")
    const mapLocation = jobs.map(job => job.location)
    console.log(mapLocation);
    const filterLocation = mapLocation.filter((location, index) => {
            return mapLocation.indexOf(location) === index;
        })
        console.log(filterLocation);
    return (
        <div>
            <form>
                <label>Location</label>
                <input 
                type="text" 
                placeholder="City, state, zip code or country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
            </form>
            <div>
                <fieldset>
                    <input type="checkbox"/>
                    <label>London</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox"/>
                    <label>New York</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox"/>
                    <label>Amsterdam</label>
                </fieldset>
                <fieldset>
                    <input type="checkbox"/>
                    <label>Berlin</label>
                </fieldset>
             </div>
        </div>
    )
}
