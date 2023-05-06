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
                        {/* What replace does is that it replaces the last 1 visit from history , take an example you are on login page and you logged in then you won't want that user go back to login page so we use replace only in such cases or if there is any other use case . */}
                        <Link to="/" replace>
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
