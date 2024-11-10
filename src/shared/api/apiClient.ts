import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add an interceptor to attach the Authorization header only on the client side
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // Access localStorage only on the client side
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
