import axios from "axios";

const baseUrl = "http://agsoftsolid-002-site1.ltempurl.com/";

export const GetAllIndustries = async () => {
  const urlGetTech = "api/Industry/api/GetIndustries";

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
////////////////////////////////delete/////////////////////////
export const deleteIndustry = (id) => {
  return axios
    .delete(`${baseUrl}api/Industry/api/Delete?id=${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      // Handle the error
      console.error("Can not delete Industry!", error);
      throw new Error("Industry could not be deleted"); // Re-throw the error to be handled by the caller
    });
};
//////////////////////////////add//////////////////////////////
const addTech = (url, data) => {
  return axios.post(url, data)
    .then(response => {
      // Handle the response data
      console.log('Post successful:', response.data);
      return response.data;  // Return the response data for further use
    })
    .catch(error => {
      // Handle the error
      console.error('Error posting data:', error);
      throw error;  // Re-throw the error to be handled by the caller
    });
};