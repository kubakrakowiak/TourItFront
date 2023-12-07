import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import { getTrendingLocations } from '../util/http';

const useFetchTrendingLocations = () => {
    const { token } = useContext(AuthContext);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) return;

        const fetchTrendingLocations = async () => {

            setIsLoading(true);
            try {
                const data = await getTrendingLocations(token);
                setLocations(data);
            } catch (err) {
                setError(err.message || 'Something went wrong.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingLocations();
    }, [token]);

    return { locations, isLoading, error };
};

export default useFetchTrendingLocations;
