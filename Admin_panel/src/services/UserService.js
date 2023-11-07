import axios from "axios";

const baseUrl = "http://localhost:5000/api/auth";

const getAllUsers = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/api/auth/users`);
    return response.data.data.users;
  } catch (error) {
    throw error;
  }
};
console.log(getAllUsers);
const UserService = {
  getAllUsers,
};

export default UserService;
