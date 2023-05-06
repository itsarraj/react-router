import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Booklist } from './pages/Booklist';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';
import { NotFoundPage } from './pages/NotFoundPage';
import { BookLayout } from './BookLayout';

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/books"
                    element={<h1>Extra Content for /books router only </h1>}
                    // This is usefull if we want to show some specific content on specific routes
                />
            </Routes>
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books" element={<BookLayout />}>
                    <Route index element={<Booklist />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>

                {/* <Route path="/books" element={<Booklist />} />
                <Route path="/books/:id" element={<Book />} />
                <Route path="/books/new" element={<NewBook />} /> */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
