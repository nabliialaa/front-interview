import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/users" className="nav-item nav-link">Users</NavLink>
                <NavLink to="/books" className="nav-item nav-link">Books</NavLink>

            </div>
        </nav>
    );
}

export { Nav };