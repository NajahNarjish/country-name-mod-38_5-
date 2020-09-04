import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
    fetch ("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then (data => setCountries(data))
    }, [])

    return (
        <div>
            <h2>total country : {countries.length}</h2>
            {
                countries.map(element =><Countries country={element} ></Countries>)
            }
        </div>
    );
};

export default Home;