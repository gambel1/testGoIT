import axios from "axios";
import { limit } from "../refs/constants";

axios.defaults.baseURL = "https://6478cebd362560649a2e7a44.mockapi.io/tweets/";

const searchParams = new URLSearchParams({
  limit,
});

export default async function getUsers(page = 1) {
  try {
    const { data } = await axios.get(`/users?${searchParams}&page=${page}`);

    return data;
  } catch (error) {
    console.log(error.message);
  }
}
