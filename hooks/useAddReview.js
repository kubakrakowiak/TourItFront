import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import { addReview as sendAddReview } from '../util/http';

const useAddReview = () => {
    const { token } = useContext(AuthContext);

    const addReview = async (locationId, value, content) => {
        if (!token) {
            throw new Error('No token found');
        }

        const reviewData = {
            value,
            content,
            location: locationId,
        };

        return await sendAddReview(token, reviewData);
    };

    return addReview;
};

export default useAddReview;
