import axios from 'axios';

export const fetchUser = async () => {
    const response = await axios.get('/user');
    return response.data;
};