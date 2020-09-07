import React from 'react';

const Country = (props) => {
    const {name, population, flag, region} = props.country;
    const flagStyle = {height: '50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    return (
        <div style={countryStyle}>
            <h2>{name}</h2>
            <img style={flagStyle} src={flag} alt="flag-img"/>
            <h6>Population: {population}</h6>
            <p><small>Region : {region}</small></p>
            <button onClick={() => props.clickHandler(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;