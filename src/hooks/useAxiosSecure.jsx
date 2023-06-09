import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const [axiosSecure, setAxiosSecure] = useState(null);
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const instance = axios.create({
      baseURL: "https://my-12th-work-server.vercel.app",
    });

    // Interceptor to inject authorization header
    instance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem("access-token");
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Interceptor to handle 401/403 responses
    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { status } = error.response;
        if (status === 401 || status === 403) {
          await logOut(); // Assuming your logout method is an async function
          navigate("/login"); // Navigate user to the login page
        }
        return Promise.reject(error);
      }
    );

    // setAxiosSecure(instance);
  }, [logOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
