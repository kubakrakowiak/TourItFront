import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import { updateProfile } from '../util/http';

const useUpdateProfile = () => {
    const { token } = useContext(AuthContext);

    const updateProfileData = async (profileData) => {
        if (!token) {
            throw new Error('Authentication token is missing');
        }

        try {
            const response = await updateProfile(token, profileData);
            return response;
        } catch (error) {
            console.error('Error updating profile:', error);
            throw error;
        }
    };

    return updateProfileData;
};

export default useUpdateProfile;
