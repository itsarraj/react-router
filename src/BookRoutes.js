import { Route, Routes } from 'react-router-dom';
import { Booklist } from './pages/Booklist';
import { Book } from './pages/Book';
import { NewBook } from './pages/NewBook';
import { BookLayout } from './BookLayout';

export function BookRoutes() {
    return (
        <>
            <Routes>
                <Route element={<BookLayout />}>
                    <Route index element={<Booklist />} />
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>
    );
}
