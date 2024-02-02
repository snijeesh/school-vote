import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthProvider";
import './App.css';
import Header from './components/Header';
import AdminHome from './components/admin/AdminHome';
import Login from './components/auth/Login';
import RegistrationForm from './components/admin/RegistrationForm';
import UserHome from './components/user/UserHome';
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" exact Component={Login} />
            <Route path="/login" exact Component={Login} />
            <Route path="/admin/home" exact Component={AdminHome} />
            <Route path="/admin/register" exact Component={RegistrationForm} />

            <Route path="/user/home" exact Component={UserHome} />
            <Route path="*" Component={NotFound}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
