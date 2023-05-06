import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export function BookLayout() {
    const [number, setNumber] = useState(3);
    return (
        <>
            <Link to="/books/1">Book 1</Link>
            <br />
            <Link to="/books/2">Book 2</Link>
            <br />
            <Link to={`/books/${number}`}>Book {number}</Link>
            <br />
            <Link to="/books/new">New Book</Link>
            <br />
            <Outlet context={{ hello: 'Hello' }} />
            {/* This Outlet Let's you render the current route  */}

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
        </>
    );
}
