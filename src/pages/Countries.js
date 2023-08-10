import React from 'react';
import Badge from 'react-bootstrap/Badge';

import '../styles/CountryListStyle.css';

import countriesJson from '../data/countries.json';
import leaguesJson from '../data/leagues.json';
import CountryFlag from '../components/CountryFlag';

const Countries = () => {
  const countries = countriesJson.response;
  const leagues = leaguesJson.response;

  const leaguesNumber = (country) => {
    const number = leagues.filter(
      (element) => element.country.name === country
    ).length;
    return number;
  };

  return (
    <div className="App">
      <h1 className="mt-5 mb-5 container-md">
        <Badge bg="warning" className="m-2">
          {countries.length}
        </Badge>
        Länder mit Fußballligen
      </h1>

      <div className="list container-sm">
        {countries.map((country, i) => {
          return (
            <div className="list__one-item">
              <CountryFlag
                url={country.flag}
                alt={`${country.name} Flag`}
                size={60}
              />

              <span>
                {country.name} ({country.code})
              </span>

              <h5>
                <Badge bg="warning" className='list__one-item-badge'>
                  {leaguesNumber(country.name)}
                </Badge>
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;

/*
<li key={`${i}-${country.code}`}>
                  <div className="list__one-item">
                    <CountryFlag
                      url={country.flag}
                      alt={`${country.name} Flag`}
                      size={40}
                    />

                    <span>
                      {country.name} ({country.code})
                    </span>
                    <h5>
                      <Badge bg="warning" className="m-2">
                        {countries.length}
                      </Badge>
                    </h5>
                  </div>
                </li>
*/
