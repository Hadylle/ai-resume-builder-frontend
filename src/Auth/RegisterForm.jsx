import React, { useState } from "react";
import { useRegister } from "../Api/RegisterApi";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { mutate, isLoading, isSuccess } = useRegister();  
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    mutate(formData, {
      onSuccess: (data) => {
        setSuccess(data.message);
        setTimeout(() => navigate("/login"), 2000);
      },
      onError: (err) => {
        setError(err.message || "Registration failed. Please try again.");
      },
    });
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
                <p className="login-instruction">Create a new account</p>

                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}

                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="submit-button">
                  <button type="submit" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                  </button>
                </div>

                <div className="register-section">
                  <p>Already have an account?</p>
                  <a href="/login">Login</a>
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
