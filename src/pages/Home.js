import React from 'react';
import Badge from 'react-bootstrap/Badge';

import countriesJson from '../data/countries.json';
import leaguesJson from '../data/leagues.json';
import teamsJson from '../data/teams.json';

const Home = props => {

  const countriesNumber = countriesJson.response.length;
  const leaguesNumber = leaguesJson.response.length;
  const teamsNumber = teamsJson.response.length;
 
  return (
    <div className="App">

      <h1 className="mt-5 container-sm text-light text-bg-info p-2">
        Willkomen
      </h1>

      <p className="p-3 container-sm">
        Hier finden Sie Neuigkeiten, Berichte und Updates zu nationalen und
        internationalen Fußball-Meisterschaften, Ligen und Mannschaften.
        Erfahren Sie alles über die aktuellsten Entwicklungen im
        Fußballgeschehen, von den Top-Ligen bis zu den Nationalmannschaften
        verschiedener Länder. Verpassen Sie keine Details zu den Spielen,
        Ergebnissen und Höhepunkten. Tauchen Sie ein in die faszinierende Welt
        des Fußballs und bleiben Sie stets auf dem Laufenden über die
        wichtigsten Ereignisse und Trends in der Fußballwelt.
      </p>

      <div className='d-flex alihn-items-center justify-content-center'>
        <h3 className="p-3">
          Länder <Badge bg="warning">{countriesNumber}</Badge>
        </h3>
        <h3 className="p-3">
          Leagues <Badge bg="warning">{leaguesNumber}</Badge>
        </h3>
        <h3 className="p-3">
          Teams <Badge bg="warning">{teamsNumber}</Badge>
        </h3>
      </div>
    </div>
  );
};

export default Home;
