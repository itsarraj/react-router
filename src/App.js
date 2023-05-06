import './App.css';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { BookRoutes } from './BookRoutes';

function App() {
    return (
        // Now onwards will only work in jsx part

        <>
            <nav>
                <ul>
                    <li>
                        {/* NavLink */}

                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {};
                            }}
                            to="/"
                        >
                            {({ isActive }) => {
                                return isActive ? 'Active Home' : 'home';
                            }}
                        </NavLink>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
