import React, {useState, useEffect} from 'react';
import Badge from 'react-bootstrap/Badge';

import '../styles/Teams.css';

import teamsJson from '../data/teams.json';

import ShowFlag from '../components/ShowFlag';
import ShowModal from "../components/ShowModal";

const Teams = () => {
        const teams = teamsJson.response;
        const [selectedCountry, setSelectedCountry] = useState('');
        const [uniqueCountries, setUniqueCountries] = useState([]);
        const [selectedLeague, setSelectedLeague] = useState('');
        const [uniqueLeagues, setUniqueLeagues] = useState({});
        const [modalShow, setModalShow] = useState(false);
        const [dataToModal, setDataToModal] = useState();

        useEffect(() => {
            const countries = new Set();
            teams.forEach(item => countries.add(item.team.country));
            setUniqueCountries([...countries].sort((a, b) => a.localeCompare(b)));
        }, [teams]);

        useEffect(() => {
            const leagues = teams.reduce((prev, curr) => {
                if (!prev.uniqueKeys.has(curr.team.league)) {
                    prev.uniqueKeys.add(curr.team.league);
                    prev.result.push({country: curr.team.country, league: curr.team.league})
                }
                return prev;
            }, {result: [], uniqueKeys: new Set()}).result;

            setUniqueLeagues(leagues);
        }, [teams]);

        if (modalShow) return <ShowModal show={modalShow} data={dataToModal} onHide={() => setModalShow(false)}/>

        return (
            <div className="App">
                <h1 className="mt-5 mb-5 container-md">
                    <Badge bg="warning" className="m-2">
                        {teams.length}
                    </Badge>
                    Fußball Clubs ({teamsJson.parameters.season})
                </h1>

                <select
                    className="mb-3 team-select"
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

                <br/>

                {selectedCountry
                    && <div>
                        <select
                            className="mb-3 team-select"
                            value={selectedLeague}
                            onChange={e => setSelectedLeague(e.target.value)}
                        >
                            <option value="">Liga auswählen</option>
                            {[...Object.values(uniqueLeagues)]
                                .filter(item => selectedCountry === item.country)
                                .map((item, index) => (
                                    <option key={index} value={item.league}
                                    >
                                        {item.league}
                                    </option>
                                ))}

                        </select>

                    </div>
                }

                {selectedLeague
                    && <p>
                        <i className="bi bi-arrow-down me-2"></i>
                        <span>Klick mal, um mehr zu sehen</span>
                        <i className="bi bi-arrow-down ms-2"></i>
                    </p>
                }


                <hr style={{width: '600px', margin: '0 auto'}}/>

                <div className="container w-50">
                    {[...teams]
                        .filter(item => selectedCountry && selectedCountry === item.team.country)
                        .filter(item => selectedLeague && selectedLeague === item.team.league)
                        .map(item => {
                            return (
                                <div
                                    className="d-flex justify-content-center mt-3"
                                    style={{cursor: 'pointer'}}
                                    key={item.team.id}
                                    onClick={() => {
                                        setModalShow(true);
                                        setDataToModal(item);
                                    }}
                                >
                                    <div
                                        className="d-flex justify-content-between align-items-center team-row"
                                        style={{width: '600px'}}>
                                        <div style={{width: '100px'}}>
                                            <ShowFlag
                                                url={item.team.logo}
                                                alt={`${item.team.name} Logo`}
                                                size={['80px']}
                                                className="border"
                                            />
                                        </div>

                                        <div className="fs-6" style={{width: '250px'}}>
                                            <h5 className="m-0 text-warning fw-bold">{item.team.name}</h5>
                                            <p className="m-0">Gegründet: {item.team.founded}</p>
                                            <p className="m-0">{item.team.league}</p>
                                        </div>

                                        <div style={{width: '250px'}} className="text-info">
                                            <p className="m-0">{item.venue.city}</p>
                                            <p className="m-0">{item.team.country}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        )
            ;
    }
;

export default Teams;
