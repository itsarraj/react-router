import { Navigate } from 'react-router-dom';

export function NotFoundPage() {
    return <Navigate to="/" />;
}
// this will redirect
// Usefull if we want to navigate user based on the component
