import React, { useContext, useState } from 'react'
import { Context } from "../pages/Context"

export default function CheckboxCity() {
    const { state, dispatch } = useContext(Context)
    const { jobs } = state
    
  // Add states for each checkbox
    const [unitedStates, setUnitedStates] = useState(false)
    const [newYork, setNewYork] = useState(false)
    const [barcelona, setBarcelona] = useState(false)
    const [berlin, setBerlin] = useState(false)

    function unitedStatesCity() {
        const unitedStatesJobs = jobs.filter(job => job.location === "United States")
        console.log(unitedStatesJobs)
        setUnitedStates(!unitedStates)
        dispatch({ type: "SEARCH_JOB_IN_UNITED_STATES", value: unitedStatesJobs })
    }
    function newYorkCity() {
        const newYorkCityJobs = jobs.filter(job => job.location === "New York City")
        console.log(newYorkCityJobs)
        setNewYork(!newYork)
        dispatch({ type: "SEARCH_JOB_IN_NEW_YORK", value: newYorkCityJobs })
    }
    function barcelonaCity() {
        const barcelonaCityJobs = jobs.filter(job => job.location === "Barcelona")
        console.log(barcelonaCityJobs)
        setBarcelona(!barcelona)
        dispatch({ type: "SEARCH_JOB_IN_BARCELONA", value: barcelonaCityJobs })
    }
    function berlinCity() {
        const berlinCityJobs = jobs.filter(job => job.location === "Berlin")
        console.log(berlinCityJobs)
        setBerlin(!berlin)
        dispatch({ type: "SEARCH_JOB_IN_BERLIN", value: berlinCityJobs })
    }


    return (
        <div>
            <fieldset>
                <input
                    type="checkbox"
                    checked={unitedStates}
                    onChange={unitedStatesCity}
                />
                <label>United States</label>
            </fieldset>
            <fieldset>
                <input
                    type="checkbox"
                    checked={newYork}
                    onChange={newYorkCity}
                />
                <label>New York</label>
            </fieldset>
            <fieldset>
                <input
                    type="checkbox"
                    checked={barcelona}
                    onChange={barcelonaCity}
                />
                <label>Barcelona</label>
            </fieldset>
            <fieldset>
                <input
                    type="checkbox"
                    checked={berlin}
                    onChange={berlinCity}
                />
                <label>Berlin</label>
            </fieldset>
        </div>

    )
}
