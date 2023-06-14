import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import app from "../../services/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const auth = getAuth(app);
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTouchStart = () => {
    setShowPassword(true);
  };

  const handleTouchEnd = () => {
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password).
        then((userCredentials) => {
           setLoginAuth(userCredentials)
        }).
        catch(error => console.log(error))

      setEmail("");
      setPassword("");
      alert("Login successful!");
      onLoginSuccess()
    } catch (error) {
      alert(error)
      // alert("Login failed. Check your email and password");
    }
  };

  const handleClose = () => {
    // Logic for closing the login component goes here
  };

  return (
    <div id="login" className="z-[100]">
      <section className="bg-dark_primary py-32 h-screen text-white">
        <div className="container w-full md:w-[80%] max-w-screen-md px-5 mx-auto">

          <h4 className="subtitle font-bold text-xl text-center" data-aos="fade-down">
            SONKOPORTRAITURE
            <br/>
            <br/>
            <br/>
            <span className="text-2xl text-white">LOGIN</span>
          </h4>
          
          <button className="absolute top-4 right-4 text-white" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <br />
          <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="flex flex-col gap-5 mx-auto max-w-sm"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
              aria-label="Email"
            />
            <div className="relative">
              <div className="flex flex-row border border-slate-600 p-3 rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  required
                  className="flex-1"
                  aria-label="Password"
                />
                <button
                  type="button"
                  className="text-gray-500"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button className="px-8 py-3 rounded-lg self-start bg-white text-dark_primary font-bold w-full">
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
