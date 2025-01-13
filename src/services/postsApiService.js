import axiosService from './baseService';
import { FETCH_POSTS_API_URL } from '../utils/constants';

const { axiosInstance } = axiosService;

const fetchPosts = async (limit = 2) => {
  try {
    const response = await axiosInstance.get(`${FETCH_POSTS_API_URL}?_limit=${limit}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching posts');
  }
};
export default { fetchPosts };
