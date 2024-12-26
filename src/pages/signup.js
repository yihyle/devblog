import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";
import Loginimg from "../img/login.png";
import Signupimg from "../img/signup.png";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <>
            <div className="header-po">
                <div className="logo-po" onClick={handleLogoClick}>
                    dev-blog
                </div>
            </div>
            <div className="signup-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2 className="signup-title">Sign Up</h2>
                    <div className="signup-field">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signup-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signup-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="signup-field">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                    <p className="redirect-text">
                        계정이 있으신가요?{" "}
                        <span className="redirect-link" onClick={handleLoginRedirect}>
                            로그인
                        </span>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Signup;
