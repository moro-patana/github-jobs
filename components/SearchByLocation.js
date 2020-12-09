import React, { useContext, useState } from 'react'
import { Context } from "../pages/Context"
import CheckboxeCity from "../components/CheckboxCity"
import FullTimeJobs from "../components/FullTimeJobs"

export default function SearchByLocation() {
    const { state, dispatch } = useContext(Context)
    const { jobs } = state
    const [location, setLocation] = useState("")
    const searchByCityName = jobs.filter(job => job.location.toLowerCase().includes(location))
    function handleSearchCityName(e) {
        setLocation(e.target.value)
        dispatch({ type: "SEARCH_BY_CITYNAME", value: searchByCityName })
    }
    return (
        <div>
            <FullTimeJobs />
            <form className="search-city">
                <label>Location</label>
                <fieldset>
                    <i className="ri-earth-line"></i>
                    <input
                        type="text"
                        placeholder="City, state, zip code or country"
                        value={location}
                        onChange={handleSearchCityName}
                    />
                </fieldset>
            </form>
            <CheckboxeCity />
        </div>
    )
}
