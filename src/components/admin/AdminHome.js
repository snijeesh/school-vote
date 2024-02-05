import { Navigate } from "react-router-dom";
import useAuthContext from "../auth/UseAuthContext";


const AdminHome = () => {
    const { userInfo } = useAuthContext();
    if (!userInfo || userInfo?.role !== 'admin') {
        console.log('not logged in.');
        return <Navigate replace to="/login" />;
    }

    const handleOnClick = () => {
        let activateVoting = {
            isActivateVoting: true
        }
        console.log('activated');
    }
    
    return (
        <div>
            <div className="page-header">
                Admin home
            </div>
            <button onClick={handleOnClick} >Activate Vote</button>
        </div>
    );
};

export default AdminHome;