import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Loginimg from "../img/login.png";
import Signupimg from "../img/signup.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleSignupRedirect = () => {
        navigate("/signup");
    };

    return (
        <>
            <div className="header-po">
                <div className="logo-po" onClick={handleLogoClick}>
                    dev-blog
                </div>
            </div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-title">Login</h2>
                    <div className="login-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="loginput"
                        />
                    </div>
                    <div className="login-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="loginput"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <p className="signup-prompt">
                        계정이 없으신가요?{" "}
                        <span className="signup-link" onClick={handleSignupRedirect}>
                            회원가입
                        </span>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;
