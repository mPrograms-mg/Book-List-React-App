import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const fetchBooks = async () => {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
};

export const addBook = async (book) => {
  const response = await axios.post(`${BASE_URL}/books`, book);
  return response;
};


export const login = async (user)=>{
  const response = await axios.post(`${BASE_URL}/api/login`,user)
  return response
}

export const register = async (registerUser)=>{
  const response = await axios.post(`${BASE_URL}/api/register`,registerUser)
  return response
}