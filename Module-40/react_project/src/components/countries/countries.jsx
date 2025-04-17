import React, { use, useState } from "react";
import Country from "../country/country";
import './countries.css'

const Countries =({countryPromise})=>{
    // jehetu onekgulo country visit kora hobe tai useState empty array 
    const [visitedCountries , setVisitedCountries] = useState([]);
    
    const countries = use(countryPromise)
    // console.log(countries)
    
    const handleVisitedCountries = (country)=>{
        console.log('country visted clicked',country)
        
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }

    return(
        <div >
            <h3>Hello travelling</h3>
            <h4>total country : {countries.length}</h4>
            <h4>total visited so far : {visitedCountries.length}</h4>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>


            <div className='countries'>
            {
                countries.map(country=> <Country 
                    key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>)
            }
            </div>
        </div>
    );

};


export default Countries;