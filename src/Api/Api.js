import axios from "axios";
import Followers from "../Followers/Followers";

const BASE_URL = "https://6478cebd362560649a2e7a44.mockapi.io/tweets/";

export const getUsers = async (user) => {
  return await axios
    .get(`${BASE_URL}/${user}`)
    .then((response) => response.data);
};

export const updateUsers = async (userId) => {
  return await axios
    .put(`${BASE_URL}/${userId}`)
    .then((response) => response.data);
};

