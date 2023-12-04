import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import { getNearestLocations } from '../util/http';

const useFetchLocations = (xCoord, yCoord) => {
    const { token } = useContext(AuthContext);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocations = async () => {
            if (!token) return;

            setIsLoading(true);
            try {
                const data = await getNearestLocations(token, xCoord, yCoord);
                setLocations(data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLocations();
    }, [token, xCoord, yCoord]);

    return { locations, isLoading, error };
};

export default useFetchLocations;
