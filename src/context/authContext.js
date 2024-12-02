import React, { createContext } from 'react';
import { login, register } from '../services/Api'

const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const registerFn = async (userData) => {
        try {
          const response = await register(userData)
          const { token } = response.data; // Assuming API returns user data and token
          localStorage.setItem('token', token); // Store token in localStorage
          return response
        } catch (err) {
          alert(err.response?.data?.message || 'Registration failed');
        }
      };

     // Function to login a user
    const loginFn = async (userData) => {
      try {
        const response = await login(userData)
        const { token } = response.data; // Assuming API returns user data and token
        localStorage.setItem('token', token); // Store token in localStorage
        return response
      } catch (err) {
        alert(err.response?.data?.message || 'Login failed');
      }
    };  

  return (
    <AuthContext.Provider value={{registerFn, loginFn, }}>
      {children}
    </AuthContext.Provider>
  );
}


export default AuthContext;
