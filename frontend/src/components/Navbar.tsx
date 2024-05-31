// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar d-flex justify-around navbar-light bg-light">
            <Link className="navbar-brand" to="/">E-Team</Link>

            <ul className="navbar-nav d-flex flex-row gap-4">
                <li className="nav-item active">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="https://github.com/arunkjojo">Github</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
