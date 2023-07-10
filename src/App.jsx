import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home";
import Login from "./components/dashboard-signin/login";
import Dashboard from "./pages/dashboard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./services/firebase";
import { useNavigate } from "react-router-dom";

const App = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    Aos.init({
      duration: 1200,
      offset: 100,
      disable: "mobile",
    });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      navigate("/dashboard");
      }
    
    });
  }, []);

  const handleLoginSuccess = () => {
    setUser(auth.currentUser);
    navigate("/dashboard");
  };

  const handleLogout = async () => {
    try {
      // Sign out the user
      await auth.signOut();
      // Clear the user state
      setUser(null);
      // Redirect to the home page
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          {user && <Route path="/dashboard" element={  <Dashboard onLogout={handleLogout} />} />}
          {user === null && <Route path="/dashboard" element={<Login onLoginSuccess={handleLoginSuccess} />} />}
        </Routes>
      </div>
  );
};

export default App;
