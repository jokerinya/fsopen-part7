import axios from 'axios';
const baseUrl = '/api/v1/users';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

export default { getAll };
