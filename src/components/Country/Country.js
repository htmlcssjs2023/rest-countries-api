import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,region,area,flags} = props.country;
    console.log(props.country);

    return (
        <div className='country'>
          <h3>Country Name: {name.common}</h3>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Area: {area}</p>
          <img src={flags.png} alt="" />
          
        </div>
    );
};

export default Country;