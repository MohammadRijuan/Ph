import React, { useState } from "react"
import './country.css'

const Country =({country,handleVisitedCountries})=>{

    const [visit,setVisited]= useState(false)

    function handleVisit(){
        // setVisited(true)

        if(visit === true){
            setVisited(false)
        }
        else{
            setVisited(true)
        }

        handleVisitedCountries(country)
    }

    console.log(country.flags)
    return (
        <div className={`country ${visit && 'country-visit'}`}>
           <h3>Country Name : {country.name.common}</h3>
           <img src={country.flags.png} alt="" />
           <p>Independent : {country.independent ? 'free' : 'Not Free'}</p>
           <p>Population : {country.population}</p>
           <button className={visit ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisit}>{visit? 'visited':'Not visited'}</button>
        </div>
    )
}

export default Country