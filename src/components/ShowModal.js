import React from "react";
import Modal from 'react-bootstrap/Modal';
import ShowFlag from "./ShowFlag";

const ShowModal = props => {
    const team = props.data.team;
    const venue = props.data.venue;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="d-flex align-items-center">

                    <ShowFlag
                        url={team.logo}
                        alt={`${team.name} logo`}
                        size={['15%', '15%']}
                    />

                    <h1 style={{marginLeft: '10px'}}>
                        {team.name}
                    </h1>

                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="d-flex align-content-center p-2">

                    <ShowFlag
                        url={venue.image}
                        alt={`${team.name} Stadion`}
                        size={['35%', '35%']}
                    />

                    <div style={{marginLeft: '20px'}}>
                        <p>Stadion: <p className="fw-bold text-info">{venue.name}</p></p>
                        <p>Kapazität: <p className="fw-bold text-info">{venue.capacity}</p></p>
                        <p>Address: <p className="fw-bold text-info">{venue.address}, {venue.city}, {team.country}</p></p>
                    </div>

                </div>

            </Modal.Body>

        </Modal>
    );
}


export default ShowModal;