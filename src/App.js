import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/country/Country'
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryList, pushCountryList] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  },[]);

  const addCountryToList = (country) => {
    const newCountryList = [...countryList, country];
    pushCountryList(newCountryList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Loaded : {countries.length}</h1>
        <h3>Country Added: {countryList.length}</h3>
        <Cart countryList={countryList}/>
        <ul>
          {
            countries.map(singleCountry => <Country clickHandler={addCountryToList} country={singleCountry}  key={singleCountry.alpha3Code}></Country>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
