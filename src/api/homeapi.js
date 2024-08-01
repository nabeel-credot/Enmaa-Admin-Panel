import axios from 'axios';

const API_URL = 'http://localhost:4001/api/cms';

export const getTableData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching table data:', error);
    throw error;
  }
};

export const updateTableData = async (data) => {
  try {
    const response = await axios.put(API_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error updating table data:', error);
    throw error;
  }
};


export const getTableDataById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data by ID:', error);
    throw error;
  }
};

export const updateTableDataById = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data by ID:', error);
    throw error;
  }
};
