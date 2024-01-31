import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import GraphqlClient from '../client/GraphqlClient';

const graphqlClient = new GraphqlClient();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // useEffect(() => {
    //     const currentUser = graphqlClient.validateUser()
    //     setUser(currentUser)
    //     }, []);
  
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };