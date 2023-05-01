import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className='container'>
            <h1>You can visit any country without money !</h1>
            <div className='countries_container'>
                {
                countries.map(country=> <Country 
                   country={country}
                   key={country.cca3}
                    />)
            }
            </div>
        </div>
    );
};

export default Countries;