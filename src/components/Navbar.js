import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">APP STORES</Link>

                <div className="navbar-nav ml-md-auto">
                    <div className="navbar-nav">
                        <NavLink exact activeClassName="active" to="/" className="nav-link">Dashboard </NavLink>
                        <NavLink exact activeClassName="active" to="/stores" className="nav-link" >Stores</NavLink>
                        <NavLink exact activeClassName="active" to="/userscl" className="nav-link" >Users cl</NavLink>
                        <NavLink exact activeClassName="active" to="/usersfn" className="nav-link" >Users fn</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
