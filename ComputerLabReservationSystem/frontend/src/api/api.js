import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // change if your backend URL differs

export const registerUser = async (userData) => {
  try {
   const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};