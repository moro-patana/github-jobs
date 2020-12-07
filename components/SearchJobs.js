import React from 'react'

export default function SearchJobs() {
    return (
        <div className="search-jobs">
            <form className="form-input">
                <input
                type="text"
                placeholder="Title, companies, expertise or benefits"
                />
                <button className="search-button">Search</button>
            </form>
        </div>
    )
}
