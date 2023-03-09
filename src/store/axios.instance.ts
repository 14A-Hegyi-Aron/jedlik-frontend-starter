import axios from "axios";

const $axios = axios.create({
  baseURL: "https://hahu.cyclic.app",
  withCredentials: true,
});

export default $axios;
