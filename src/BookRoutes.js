import { Route, Routes } from 'react-router-dom';
import { Booklist } from './pages/Booklist';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';

export function BookRoutes() {
    return (
        <Routes>
            <Route index element={<Booklist />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
        </Routes>
    );
}
