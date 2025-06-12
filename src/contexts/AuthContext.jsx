
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password, role = 'user') => {
    // Mock login logic
    const userData = {
      id: 1,
      name: email.split('@')[0],
      email: email,
      role: role
    };
    setUser(userData);
    return userData;
  };

  const signup = (name, email, password, role = 'user') => {
    // Mock signup logic
    const userData = {
      id: Date.now(),
      name: name,
      email: email,
      role: role
    };
    setUser(userData);
    return userData;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
