import axios from "axios";

// base url to make requests to the movies database
const instance = axios.create({
  baseURL: "",
});

export default instance;
