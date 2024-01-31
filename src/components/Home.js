
import { Navigate } from "react-router-dom";
import useAuthContext from "./UseAuthContext";

const Home = () => {
    const { userToken } = useAuthContext();
    if (!userToken) {
        console.log('not logged in.');
        return <Navigate replace to="/login" />;
    }
    console.log(userToken);
    return (
        <div>Home page..</div>
    );
};

export default Home;