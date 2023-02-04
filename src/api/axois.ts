import axios from "axios";

const api = axios.create({ baseURL: "https://api.spacexdata.com/v5/" });

api.interceptors.response.use(
  config => {
    if (config.status === 200) {
      return config.data;
    }
  },
  error => {
    console.log("Bro error ", error);
    return Promise.reject(error);
  }
);

export default api;
