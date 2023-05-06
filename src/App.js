import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
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
                        {/*  state - it does not show up in url mostly useful */}
                        <Link to="/" state={}>
                            Home
                        </Link>
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
