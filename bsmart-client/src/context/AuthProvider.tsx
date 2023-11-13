import React, { useState, createContext, ReactNode } from "react";
import axiosClient from "../config/axios";
import { authUser, User } from "../interfaces";
import { useNavigate } from "react-router-dom";

export type UserContextData = {
  auth: authUser;
  loading: boolean;
  login: (user: User) => void;
  register: (user: User) => void;
  logout: () => void;
  errors: string[];
};

const initialAuthValues = {
  name: "",
  email: "",
  token: "",
};

const AuthContext = createContext<UserContextData | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState(initialAuthValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const login = async (userData: User) => {
    setErrors([]);
    setLoading(true);
    if (token) {
      setLoading(false);
      return;
    }

    const { email, password } = userData;
    const user = {
      email,
      password,
    };

    try {
      const { data } = await axiosClient.post("/login", user);

      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/products");
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
      setTimeout(() => {
        setErrors([]);
      }, 4000);
    }
    setLoading(false);
  };

  const register = async (userData: User) => {
    setErrors([]);
    setLoading(true);
    if (token) {
      setLoading(false);
      return;
    }

    const { name, email, password, password_repeat } = userData;
    const user = {
      name,
      email,
      password,
      password_confirmation: password_repeat,
    };

    try {
      const { data } = await axiosClient.post("/register", user);

      console.log(data);

      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/products");
    } catch (error) {
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    try {
      await axiosClient.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrors(Object.values(error.response.data.errors));
    }
    setLoading(false);
  };

  const contextValue: UserContextData = {
    auth,
    loading,
    login,
    register,
    logout,
    errors,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
