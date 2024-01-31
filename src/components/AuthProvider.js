import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    const [userToken, setUser] = useState(null);
    
    return (
      <AuthContext.Provider value={{ userToken, setUser }}>{children}</AuthContext.Provider>
    );
  };