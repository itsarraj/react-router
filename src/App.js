import './App.css';
import { Link, Route, Routes, useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Booklist } from './pages/Booklist';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';
import { NotFoundPage } from './pages/NotFoundPage';
import { BookLayout } from './BookLayout';
import { BookRoutes } from './BookRoutes';

function App() {
    // Stating Routes using JS now
    let element = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
        {
            path: '/books/*',
            element: <BookRoutes />,
        },
    ]);
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            {element}
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes> */}
        </>
    );
}

export default App;
