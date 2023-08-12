import React, {useEffect, useState} from 'react';

import leaguesJson from '../data/leagues.json';
import ShowFlag from '../components/ShowFlag';

import {Badge} from 'react-bootstrap';
import '../styles/Leagues.css';

const Leagues = () => {
    const leagues = leaguesJson.response;
    const [selectedCountry, setSelectedCountry] = useState('');
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
                value={selectedCountry}
                onChange={e => setSelectedCountry(e.target.value)}
            >
                <option value="">Land auswählen</option>
                {uniqueCountries.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            <hr style={{width: '500px', margin: '0 auto'}}/>

            <div className="container w-50">
                {[...leagues]
                    .sort((a, b) => a.country.name.localeCompare(b.country.name))
                    .filter(item => selectedCountry && selectedCountry === item.country.name)
                    .map(item => {
                        return (
                            <div
                                className="d-flex justify-content-center mt-3"
                                key={item.league.id}>
                                <div
                                    className="d-flex justify-content-between align-items-center league-row"
                                    style={{width: '500px'}}>
                                    <div style={{width: '100px'}}>
                                        <ShowFlag
                                            url={item.league.logo}
                                            alt={`${item.country.name} Logo`}
                                            size={['80px']}
                                            className="border"
                                        />
                                    </div>

                                    <div className="fs-6" style={{width: '200px'}}>
                                        <p className="text-warning fw-bold fs-5">{item.league.name} ({item.league.type})</p>
                                    </div>

                                    <div style={{width: '100px'}}>
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
