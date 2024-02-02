import { Navigate } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";

const Home = () => {
    const { userInfo } = useAuthContext();
    if (!userInfo && userInfo.role === 'admin') {
        console.log('not logged in.');
        return <Navigate replace to="/login" />;
    }
    
    return (
        <div>Admin home page..</div>
    );
};

export default Home;