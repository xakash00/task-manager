import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "abc@gmail.com" && password == "123456") {
      localStorage.setItem("email", email);
      setError(false);
      console.log("welcome");
      navigate("/viewTask");
    } else {
      setError(true);
      console.log("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2 className="poppins_medium">Task.</h2>
              <p className="poppins_regular">
                Email==="abc@gmail.com" <br />
                Password==="123456"
                <br />
                are the dummy credentials for login to the application
              </p>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2 className="poppins_medium lightGrey_c">Login</h2>
              <form onSubmit={handleSubmit} className="poppins_medium">
                <p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </p>
                <p>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </p>
                {error ? (
                  <div className="error_message d-flex align-item-center justify-content-center text-danger poppins_medium">
                    <i className="ri-error-warning-fill me-2"></i>Invalid
                    Credentials
                  </div>
                ) : null}
                <p className="mt-5">
                  <input className="btn" type="submit" value="Log In" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
