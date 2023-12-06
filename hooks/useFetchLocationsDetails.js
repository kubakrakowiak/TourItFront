import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import {getLocationDetails} from "../util/http";

const useFetchLocationDetails = (locationId) => {
    const { token } = useContext(AuthContext);
    const [locationDetails, setLocationDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            if (!token || !locationId) return;

            setIsLoading(true);
            try {
                const data = await getLocationDetails(locationId);
                setLocationDetails(data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetails();
    }, [token, locationId]);

    return { locationDetails, isLoading, error };
};

export default useFetchLocationDetails;