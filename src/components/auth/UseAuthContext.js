import {useContext} from 'react';
import AuthContext from "./AuthContext";

const useAuthContext = () => {
  const userInfo = useContext(AuthContext);
  if (userInfo === undefined) {
    throw new Error("useAuthContext can only be used inside AuthProvider");
  }
  return userInfo;
};

export default useAuthContext;