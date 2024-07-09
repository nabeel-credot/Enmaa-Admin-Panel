import axios from './api';

const AboutUsService = {
  getAboutUsContent: async () => {
    try {
      const response = await axios.get('/about-us');
      return response.data;
    } catch (error) {
      console.error('Error fetching About Us content:', error);
      throw error;
    }
  },

  createOrUpdateAboutUsContent: async (formData) => {
    try {
      const response = await axios.post('/about-us', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating or updating About Us content:', error);
      throw error;
    }
  },

  deleteAboutUsContent: async () => {
    try {
      const response = await axios.delete('/about-us');
      return response.data;
    } catch (error) {
      console.error('Error deleting About Us content:', error);
      throw error;
    }
  }
};

export default AboutUsService;
