import apiInstance from './api';

export const getTableData = async () => {
  try {
    const response = await apiInstance.get(`/team`);
    return response.data.teamMembers;
  } catch (error) {
    console.error('Error fetching table data:', error);
    throw error;
  }
};

export const createTableData = async (data) => {
  try {
    console.log('Creating new team member');
    const response = await apiInstance.post(`/team`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating table data:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteTableDataById = async (id) => {
  try {
    await apiInstance.delete(`/team/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting data by ID:', error);
    throw error;
  }
};