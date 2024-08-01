import apiInstance from './api';


export const fetchfooterData = async () => {
  try {
    const response = await apiInstance.get(`/footer`);
    return response.data;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    throw error;
  }
};

export const updatefooterData = async (data) => {
  try {
    const response = await apiInstance.put(`/footer`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating footer data:', error);
    throw error;
  }
};