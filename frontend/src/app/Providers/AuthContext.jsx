"use client"
import React, { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/navigation'
// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // State to store user details
  const [error, setError] = useState(null); // State to store any error messages
  const router = useRouter();
  const login = async (email, password) => {
    try {
      const response = await fetch(`http://localhost:5000/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Login failed: ${errorText}`);
      }
  
      const text = await response.text();
      try {
        const userData = JSON.parse(text);
        setUser(userData.user);
        console.log(userData.user);
      } catch (parseError) {
        throw new Error('Failed to parse JSON: ' + parseError.message);
      }
  
    } catch (error) {
      console.error('Login error:', error.message);
      setError(error.message);
    }
  };
  

  return (
    <AuthContext.Provider value={{ user, login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
