import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthProvider";
import './App.css';
import Header from './components/Header';
import Home from './components/admin/Home';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/admin/home" Component={Home} />  
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
