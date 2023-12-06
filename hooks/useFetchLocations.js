import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import { getNearestLocations } from '../util/http';

const useFetchLocations = (xCoord, yCoord, latitudeDelta, longitudeDelta) => {
    const { token } = useContext(AuthContext);
    const [locations, setLocations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) return;

        const fetchLocations = async () => {
            setIsLoading(true);
            try {
                const data = await getNearestLocations(token, xCoord, yCoord, latitudeDelta, longitudeDelta);
                setLocations(data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLocations();
    }, [token, xCoord, yCoord, latitudeDelta, longitudeDelta]);

    return { locations, isLoading, error };
};

export default useFetchLocations;
