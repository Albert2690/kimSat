import axios from "axios";

const API_URL = "https://34.230.50.181";
// const API_URL = "https://qf3gcdtq-8000.inc1.devtunnels.ms";
// const API_URL = "http://localhost:9090/";





const apiInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to include the bearer token in the header
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken"); 

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; 
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    console.log(response, "response from axios");

    return response;
  },
  (error) => {
    console.log(error, "errrrrrrrrrrrrrrrrr");
    return Promise.reject(error);
  }
);

export default apiInstance;
