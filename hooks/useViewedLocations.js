import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import { getViewedLocations } from '../util/http';

const useViewedLocations = () => {
    const { token } = useContext(AuthContext);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) return;

        const fetchViewedLocations = async () => {

            setIsLoading(true);
            try {
                const data = await getViewedLocations(token);
                setLocations(data);
            } catch (err) {
                setError(err.message || 'Something went wrong.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchViewedLocations();
    }, [token]);

    return { locations, isLoading, error };
};

export default useViewedLocations;
