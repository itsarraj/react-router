import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
    // this is the way we navigate in functional components & we use useNavigate() most of the time
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }, []);

    return <h1>NotFoundPage</h1>;
}
// this will redirect
// Usefull if we want to navigate user based on the component
