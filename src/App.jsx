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
import Toasting from "./components/toasting";
import { createElement } from "react";

import { content } from "./services/Content";

const App = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const { icon, link } = content.Contact.social_media[2];


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
    <>
       <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bottom-5 fixed right-5 z-[999]"
          aria-label="Social Media Link"

        >
          <h3 className="bg-[green]  p-[1rem] md:p-[1.2rem] round text-white text-[1.5rem] md:text-[2rem]">
            {createElement(icon)}
          </h3>
        </a>
      <Toasting />
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          {user && (
            <Route
              path="/dashboard"
              element={<Dashboard onLogout={handleLogout} />}
            />
          )}
          {user === null && (
            <Route
              path="/dashboard"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
          )}
        </Routes>
      </div>
    </>
  );
};

export default App;
