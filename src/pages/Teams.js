import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

import '../styles/Teams.css';

import countriesJson from '../data/countries.json';
import leaguesJson from '../data/leagues.json';
import teamsJson from '../data/teams.json';

import CountryFlag from '../components/CountryFlag';

const Teams = () => {
  const countries = countriesJson.response;
  const leagues = leaguesJson.response;
  const teams = teamsJson.response;
  const [selectTeam, setSelectTeam] = useState(null);

  console.log(teams);

  return (
    <div className="App">
      <h1 className="mt-5 mb-5 container-md">
        <Badge bg="warning" className="m-2">
          {teams.length}
        </Badge>
        Mainschafte
      </h1>

      <select
        className="mb-3 team-select"
        value={selectTeam}
        onChange={(e) => setSelectTeam(e.target.value)}>
        <option value="">Team auswählen</option>
        {teams.map((item) => (
          <option key={item.team.id} value={item.team.name}>
            {item.team.name}
          </option>
        ))}
      </select>

      <hr style={{ width: '500px', margin: '0 auto' }} />

      <div className="container w-50">
        {[...teams].map((item) => {
          return (
            <div
              className="d-flex justify-content-center mt-3"
              key={item.team.id}>
              <div
                className="d-flex justify-content-between align-items-center team-row"
                style={{ width: '500px' }}>
                <div style={{ width: '100px' }}>
                  <CountryFlag
                    url={item.team.logo}
                    alt={`${item.team.name} Logo`}
                    size={80}
                    className="border"
                  />
                </div>

                  <div className="fs-6" style={{ width: '200px' }}>
                    <span>{item.team.name}</span>
                  </div>

                  <div style={{ width: '100px' }}>
                    <span>{item.team.country}</span>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
