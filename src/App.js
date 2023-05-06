import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Booklist } from './pages/Booklist';
import { Book } from './pages/Book';

function App() {
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<Booklist />} />
            </Routes>
        </>
    );
}

export default App;
