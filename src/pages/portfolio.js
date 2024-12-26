import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/portfolio.css";
import Loginimg from "../img/login.png";
import Signupimg from "../img/signup.png";

function Portfolio() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleSignupClick = () => {
        navigate("/signup");
    };

    return (
        <>
            <div className="background-po">
                <div className="header-po">
                    <div className="logo-po" onClick={handleLogoClick}>dev-blog</div>
                    <div className="menubox-po">
                        <img
                            src={Loginimg}
                            className="login-po"
                            alt="Login"
                            onClick={handleLoginClick}
                        />
                        <img
                            src={Signupimg}
                            className="signup-po"
                            alt="Signup"
                            onClick={handleSignupClick}
                        />
                    </div>
                </div>
                <div className="portfolio-po">
                    <p>Portfolio_</p>
                </div>
                <div className="grid-container">
                    {Array.from({ length: 30 }).map((_, index) => (
                        <div key={index} className="grid-item"></div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Portfolio;
