import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link, useLocation } from 'react-router-dom';

import logo from '../logo.svg';
import '../styles/HeaderNav.css';

const RootLayouts = () => {
  const location = useLocation();

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mb-3"
        bg="dark"
        data-bs-theme="dark"
        sticky="top">

        <Container>

          <Navbar.Brand>

            <Nav.Item>
              <Link to="/" className="nav-link">
                <img
                  src={logo}
                  alt="logo"
                  className="me-3 text-bg-info rounded-circle"
                />
                Fußball STATS
              </Link>
            </Nav.Item>

          </Navbar.Brand>

          <Navbar id="basic-navbar-nav">

            <Nav className="me-auto">

              <Nav.Item>
                <Link
                  to="/livescore"
                  className={`nav-link ${location.pathname === '/livescore' ? 'text-info' : ''}`}
                  >
                  Livescore
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="/countries"
                  className={`nav-link ${location.pathname === '/countries' ? 'text-info' : ''}`}
                  >
                  Länder
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="/leagues"
                  className={`nav-link ${location.pathname === '/leagues' ? 'text-info' : ''}`}
                  >
                  Leagues
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  to="/teams"
                  className={`nav-link ${location.pathname === '/teams' ? 'text-info' : ''}`}
                  >
                  Teams
                </Link>
              </Nav.Item>

            </Nav>

          </Navbar>

        </Container>
      </Navbar>

      <Outlet/>
    </>
  );
};

export default RootLayouts;
