import axios from "axios";

const baseUrl = "http://agsoftsolid-002-site1.ltempurl.com/";

export const GetAllServices = async () => {
  const urlGetServices = "api/Service/api/GetServices";

  return axios
    .get(`${baseUrl}${urlGetServices}`)
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

////////////////////////////////delete/////////////////////////
export const deleteService = (id) => {
  return axios
    .delete(`${baseUrl}api/Service/api/Delete?id=${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      // Handle the error
      console.error("Can not delete Service!", error);
      throw new Error("Service could not be deleted"); // Re-throw the error to be handled by the caller
    });
};
//////////////////////////////add//////////////////////////////

export const addService = ( data) => {
  return axios.post(`${baseUrl}api/Service/api/Post`, data)
  .then(response => {
    // Handle the response data
    console.log('Post successful:', response.data);
    return response.data;  // Return the response data for further use
  })
  .catch(error => {
    // Handle the error
    console.error('Error posting data:', error);
    throw new Error("Couldn’t add Service");  // Re-throw the error to be handled by the caller
  });
};
//////////////////update///////////////
export const updateService = ( updatedData,id) => {
  return axios.put(`${baseUrl}api/Service/api/Update?id=${id}`, updatedData)
  .then(response => {
    console.log('Data updated successfully:', response.data);
  })
  .catch(error => {
    console.error('Error updating data:', error);
    throw new Error("Couldn’t update Service");
  });
}