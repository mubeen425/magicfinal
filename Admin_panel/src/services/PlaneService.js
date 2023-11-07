import axios from "axios";

const baseUrl = "http://localhost:5000/api/admin/planes"; // Adjust the base URL as needed

const getAllPlanes = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data; // Assuming the plane data is directly under `data`
  } catch (error) {
    throw error;
  }
};

const createPlane = async (planeData) => {
  try {
    const response = await axios.post(`${baseUrl}`, planeData);
    return response.data; // Assuming the newly created plane is in the response
  } catch (error) {
    throw error;
  }
};

const updatePlane = async (planeId, planeData) => {
  try {
    const response = await axios.put(`${baseUrl}/${planeId}`, planeData);
    return response.data; // Assuming the updated plane is in the response
  } catch (error) {
    throw error;
  }
};

const deletePlane = async (planeId) => {
  try {
    const response = await axios.delete(`${baseUrl}/${planeId}`);
    return response.data; // Assuming the deleted plane is in the response
  } catch (error) {
    throw error;
  }
};

const PlaneService = {
  getAllPlanes,
  createPlane,
  updatePlane,
  deletePlane,
};

export default PlaneService;
