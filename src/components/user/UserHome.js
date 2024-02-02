import { Navigate } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";

const UserHome = () => {
    const { userInfo } = useAuthContext();
    if (!userInfo && userInfo?.role !== 'user') {
        console.log('not logged in.');
        return <Navigate replace to="/login" />;
    }
    
    return (
        <div>User home page..</div>
    );
};

export default UserHome;