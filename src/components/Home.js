
import { Navigate } from "react-router-dom";
import useAuthContext from "./UseAuthContext";

const Home = () => {
    console.log('home');
    const { user } = useAuthContext();
    if (!user) {
        console.log('no user');
        return <Navigate replace to="/login" />;
    }
    console.log(user);
    return (
        <div>Home page..</div>
    );
};

export default Home;