import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
    // this is the way we navigate in functional components & we use useNavigate() most of the time
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/');
            // navigate(-1); // used to go back once in history
            // navigate(-2); // used to go back twice in history
        }, 1000);
    }, []);

    return <h1>NotFoundPage</h1>;
}
// this will redirect
// Usefull if we want to navigate user based on the component
