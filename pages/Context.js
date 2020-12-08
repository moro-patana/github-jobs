import React, { useState, useEffect, useReducer } from 'react'
const Context = React.createContext()
const JOBS_API = " https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description"
function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "FETCH_DATA": {
                return {
                    ...state, loading: false,jobs: action.jobs

                }
            }
            case "SEARCH_JOB_BY_NAME": {
                return {
                    ...state,
                    loading: false,
                    jobs:action.value
                }
            }
            case "SEARCH_FULL_TIME_JOB": {
                return {
                    ...state,
                    loading: false,
                    jobs: action.value
                }
            }

         }
    },{
        jobs: [],
        loading: true,
    }
    )

        useEffect(() => {
            fetch(JOBS_API)
              .then(response => response.json())
              .then(data => dispatch({type:"FETCH_DATA", jobs:data}))
          }, []);
    return (
        <Context.Provider
        value={{state, dispatch}}
        >
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}
