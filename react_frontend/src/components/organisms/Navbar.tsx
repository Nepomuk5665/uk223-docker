import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={{ padding: '1rem', background: '#eee'}}>
            <Link to="/" style={{ marginRight: '1rem' }}>home</Link>
            <Link to="/admin" style={{ marginRight: '1rem' }}>dashboard</Link>
            <Link to="/events" style={{ marginRight: '1rem' }}>events</Link>
            <Link to="/profile" style={{ marginRight: '1rem' }}>profile</Link>

        </nav>
    );
};

export default Navbar;