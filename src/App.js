import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthProvider";
import './App.css';
import Header from './components/Header';
import Home from './components/admin/Home';
import Login from './components/auth/Login';
import RegistrationForm from './components/admin/RegistrationForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/login" exact Component={Login} />
            <Route path="/admin/home" exact Component={Home} />
            <Route path="/admin/register" exact Component={RegistrationForm} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
