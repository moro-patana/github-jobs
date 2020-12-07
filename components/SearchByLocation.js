import React from 'react'

export default function SearchByLocation() {
    return (
        <div>
            <fieldset>
               <input type="checkbox"/>
               <label>Full time</label>
            </fieldset>
            <fieldset>
                <label>Location</label>
                <input type="text" placeholder="City, state, zip code or country"/>
            </fieldset>
        </div>
    )
}
