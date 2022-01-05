import React from 'react';
import './header.css';
const Header = () => {
    const inputStyle = {
        width: '80%',
        height: '30px',
        border: '2px solid #8585c1'
    };
    return (
        <div className="header">
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Player</a>
                <form className="d-flex" style={{width: '80%'}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </div>
    );
};

export default Header;