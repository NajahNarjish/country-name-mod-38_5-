import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Countries = (props) => {
    const {name, region} = props.country;
    
    const history = useHistory();
    const handleClick = (anything) => {
        history.push(`/name/${anything}`)
    }
    const countryStyle = {
        border: '1px solid purple',
        borderRadius:"20px",
        margin: "20px",
        padding: "20px",
        backgroundColor: "rgb(185, 178, 185)",
        boxShadow: "20px"
    }
    return (
        <div style={countryStyle}>
            <h1>Country Name: {name}</h1>
            <h3>Region: {region}</h3>

            {/* 4 kinds of navigation */}
            <p><Link to ={`/name/${name}`}>Show detail of {name}</Link></p>
            
            <Link to ={`/name/${name}`}>
                <button>Show detail of {name}</button>
            </Link>

            <Link to ={`/name/${name}`}>
                <div style = {{border: '5px solid black', width: '25%', textAlign: 'center', borderRadius:"20px", margin:"5px" }}> 
                    <h4>Show detail of {name}</h4>
                    <p>Click me</p>
                </div>
            </Link>

            <button onClick={()=>handleClick(name)}>Show detail of {name}</button>


        </div>
    );
};

export default Countries;