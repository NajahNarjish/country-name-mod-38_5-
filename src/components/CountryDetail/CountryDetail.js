import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url  = `https://restcountries.eu/rest/v2/name/${countryName}`

        fetch (url)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    }, [])
    const { region, flag} = country;
    const Detailstyles = {
        margin: "20px auto",
        border: '1px solid purple',
        borderRadius:"20px",
        width: "30%",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "rgb(185, 178, 185)"
    }
    return (
        <div style={Detailstyles}>
            <h3>Detail of {countryName}</h3>
            <img style = {{width: "100%"}}src={flag} alt=""/>
            <h1>Country Name: {country.name}</h1>
            <p>Region: {region}</p>
            <p>Short name: {country.cioc}</p>

        </div>
    );
};

export default CountryDetail;