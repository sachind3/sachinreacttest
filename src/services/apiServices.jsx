import axios from "axios";
const APIURL = import.meta.env.VITE_API_URL;
export const apiService = axios.create({
  baseURL: APIURL,
});
