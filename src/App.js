import './App.css';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFoundPage } from './pages/NotFoundPage';
import { BookRoutes } from './BookRoutes';

function App() {
    const location = useLocation();
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        {/* If we use end then it will only show it as active when it is active and not when its childrens are active like
                        if we are at route
                        /books/1
                        this is only active and
                        not /books

                        only if we use end in
                        <NavLink end to="/books">

                        */}
                        <NavLink end to="/books">
                            Books
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {location.state}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
