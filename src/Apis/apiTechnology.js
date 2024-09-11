import axios from "axios";

const baseUrl = "http://agsoftsolid-002-site1.ltempurl.com/";

export const GetIndustryTech = async () => {
  const urlGetTech = "api/Technolgy/api/GetIndustriesTech";

  return axios
    .get(`${baseUrl}${urlGetTech}`)
    .then((response) => {
      // Handle the response data
      return response.data.data; // Return the data to be used later
    })
    .catch((error) => {
      // Handle the error
      console.error("There was an error fetching the data!", error);
      throw error; // Re-throw the error to be handled by the caller
    });
};
export const GetProductTech = async () => {
    const urlGetTech = "api/Technolgy/api/GetProductsTech";
  
    return axios
      .get(`${baseUrl}${urlGetTech}`)
      .then((response) => {
        // Handle the response data        
        return response.data.data; // Return the data to be used later
      })
      .catch((error) => {
        // Handle the error
        console.error("There was an error fetching the data!", error);
        throw error; // Re-throw the error to be handled by the caller
      });
  };

////////////////////////////////delete
export const deleteTech = (id) => {
    return axios
    .delete(`${baseUrl}api/Technolgy/api/Delete?id=${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      // Handle the error
      console.error("Can not delete Technology!", error);
      throw new Error("Technology could not be deleted"); // Re-throw the error to be handled by the caller
    });
};
//////////////////////////////add//////////////////////////////
export const addProductTech = (data) => {
  return axios.post(`${baseUrl}api/Technolgy/api/AddProductTech`, data)
    .then(response => {
      // Handle the response data
      console.log('Post successful:', response.data);
      return response.data;  // Return the response data for further use
    })
    .catch(error => {
      // Handle the error
      console.error('Error posting data:', error);
      throw new Error("Couldn’t add Technology");  // Re-throw the error to be handled by the caller
    });
};
//or
export const addIndustryech = (data) => {
  return axios.post(`${baseUrl}api/Technolgy/api/AddIndustryTech`, data)
    .then(response => {
      // Handle the response data
      console.log('Post successful:', response.data);
      return response.data;  // Return the response data for further use
    })
    .catch(error => {
      // Handle the error
      console.error('Error posting data:', error);
      throw new Error("Couldn’t add Technology");  // Re-throw the error to be handled by the caller
    });
};

//////////////////update///////////////
export const updateAllTech = ( updatedData,id) => {
  return axios.put(`${baseUrl}api/Technolgy/api/Update?id=${id}`, updatedData)
  .then(response => {
    console.log('Data updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error updating data:', error);
    throw new Error("Couldn’t update Service");
  });
}

