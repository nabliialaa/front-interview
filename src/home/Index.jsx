import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React - Node TEST Interview</h1>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
            <p><Link to="books">&gt;&gt; Manage Books</Link></p>
        </div>
    );
}

export { Home };