import {useContext} from 'react';
import AuthContext from "./AuthContext";

const useAuthContext = () => {
  const userToken = useContext(AuthContext);
  if (userToken === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return userToken;
};

export default useAuthContext;