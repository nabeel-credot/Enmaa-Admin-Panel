import apiInstance from './api';


//get( careers,compliants,contact,property,investor)



//  get all careers
export const getCareers = async () => {
  try {
    const response = await apiInstance.get('/careers');
    return response.data;
  } catch (error) {   
    console.error('Error fetching careers', error);
    throw error;
  }
};

export const getCareerById = async (id) => {
  try {
    const response = await apiInstance.get(`/careers/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching career with ID ${id}`, error);
    throw error;
  }
};

//  get all compliants
export const getCompliants = async () => {
    try {
      const response = await apiInstance.get('/complaints-suggestions/');
      return response.data;
    } catch (error) {
      console.error('Error fetching compliants', error);
      throw error;
    }
  };
  
  export const getCompliantById = async (id) => {
    try {
      const response = await apiInstance.get(`/complaints-suggestions//${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching compliant with ID ${id}`, error);
      throw error;
    }
};
//  get all contact
export const getContact = async () => {
try {
  const response = await apiInstance.get('/contact');
  return response.data;
} catch (error) {
  console.error('Error fetching contact', error);
  throw error;
}
};

export const getContactById = async (id) => {
try {
  const response = await apiInstance.get(`/contact/${id}`);
  return response.data;
} catch (error) {
  console.error(`Error fetching contact with ID ${id}`, error);
  throw error;
}
};
  //  get all property
export const getProperty = async () => {
    try {
      const response = await apiInstance.get('/getProperty');
      return response.data;
    } catch (error) {
      console.error('Error fetching Property', error);
      throw error;
    }
  };
  
  export const getPropertyById = async (id) => {
    try {
      const response = await apiInstance.get(`/getProperty/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching Property with ID ${id}`, error);
      throw error;
    }
  };
    //  get all Inventor
export const getInventor = async () => {
    try {
      const response = await apiInstance.get('/getInventor');
      return response.data;
    } catch (error) {
      console.error('Error fetching Inventor', error);
      throw error;
    }
  };
  
  export const getInventorById = async (id) => {
    try {
      const response = await apiInstance.get(`/getInventor/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching Inventor with ID ${id}`, error);
      throw error;
    }
  };