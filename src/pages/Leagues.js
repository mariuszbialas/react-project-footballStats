import React, { useEffect, useState } from 'react';

import countriesJson from '../data/countries.json';
import leaguesJson from '../data/leagues.json';
import CountryFlag from '../components/CountryFlag';

import { Badge } from 'react-bootstrap';
import '../styles/Leagues.css';

const Leagues = () => {
  const leagues = leaguesJson.response;
  const [selectCountry, setSelectCountry] = useState(null);
  const [uniqueCountries, setUniqueCountries] = useState([]);

  useEffect(() => {
    const countries = new Set();
    leagues.forEach((item) => countries.add(item.country.name));
    setUniqueCountries([...countries].sort((a, b) => a.localeCompare(b)));
  }, [leagues]);

  return (
    <div className="App">
      <h1 className="mt-5 mb-5">
        <Badge bg="warning" className="m-2">
          {leagues.length}
        </Badge>
        Fußballligen
      </h1>

      <select
        className="mb-3 league-country-select"
        value={selectCountry}
        onChange={e => setSelectCountry(e.target.value)}
        >
          <option value="">Land auswählen</option>
            {uniqueCountries.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <hr style={{ width: '500px', margin: '0 auto' }} />

      <div className="container w-50">
        {[...leagues]
          .sort((a, b) => a.country.name.localeCompare(b.country.name))
          .filter(item => {
            return selectCountry ? item.country.name === selectCountry : item.country.name !== selectCountry 
          })
          .map((item) => {
            return (
              <div
                className="d-flex justify-content-center mt-3"
                key={item.league.id}>
                <div
                  className="d-flex justify-content-between align-items-center league-row"
                  style={{ width: '500px' }}>
                  <div style={{ width: '100px' }}>
                    <CountryFlag
                      url={item.league.logo}
                      alt={`${item.country.name} Logo`}
                      size={80}
                      className="border"
                    />
                  </div>

                  <div className="fs-6" style={{ width: '200px' }}>
                    <span>{item.league.name}</span>
                  </div>

                  <div style={{ width: '100px' }}>
                    <span>{item.country.name}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Leagues;
