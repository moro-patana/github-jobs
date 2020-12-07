import React, { useContext, useState } from 'react'
import { Context } from "../pages/Context"

export default function SearchByLocation() {
    const {jobs} = useContext(Context)
   
    return (
        <div>
            <fieldset>
                <label>Location</label>
                <input type="text" placeholder="City, state, zip code or country"/>
            </fieldset>
        </div>
    )
}
