import React, { useState } from "react";
import { useLogin } from "../Api/login-api";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { mutate, isLoading, isError, error: mutationError } = useLogin();
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email, password }, {
      onSuccess: (data) => {
        console.log("Logged in successfully:", data);
        localStorage.setItem("token", data.token); // Store token

        // Redirect to profile page after successful login
        navigate("/profile"); // Redirects to /profile page
      },
      onError: (err) => {
        setError(err.message); // Set error message if login fails
      },
    });
  };

  // Redirect to the Register page when the Register button is clicked
  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-card">
          <div className="login-form-container">
            <div className="login-form">
              <div className="logo">
                <h2>Logo Here</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <p className="login-instruction">Please login to your account</p>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="submit-button flex ">
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log in"}
                  </button>
                </div>

                {error && <p className="error-message">{error}</p>}
                {isError && mutationError && <p className="error-message">{mutationError.message}</p>}

                <div className="forgot-password">
                  <a href="#!">Forgot password?</a>
                </div>

                <div className="register-section">
                  <p>Don't have an account?</p>
                  <button type="button" onClick={handleRegisterClick}>Register</button> 
                </div>
              </form>
            </div>
          </div>
          <div className="login-background">
            <div className="background-content">
              <h4>HIREMATCH</h4>
              <p>Match Your Skills, Land Your Dream Job.</p>
              <p>
                An AI-powered platform that helps you optimize your resume by
                matching it to job descriptions, offering tailored suggestions to
                boost your chances of landing the perfect job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
