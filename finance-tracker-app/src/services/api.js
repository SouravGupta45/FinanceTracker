import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api'; // Update the URL accordingly

export const getAllTransactions = () => {
  return axios.get(`${API_BASE_URL}/transactions`);
};

export const addTransaction = (transaction) => {
  return axios.post(`${API_BASE_URL}/transactions`, transaction);
};

export const deleteTransaction = (id) => {
  return axios.delete(`${API_BASE_URL}/transactions/${id}`);
};

export const deleteAllTransactions = () => {
  return axios.delete(`${API_BASE_URL}/transactions`);
};
