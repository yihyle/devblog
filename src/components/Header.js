import React from "react";
import '../styles/header.css';
import { useNavigate } from "react-router-dom";
import Loginimg from '../img/login.png';
import Signimg from '../img/signup.png';
import Fireimg from '../img/fire.png';
import Writeimg from '../img/write.png';
import Timeimg from '../img/time.png';
import Callimg from '../img/call.png';
import Mainimg from '../img/main.png';
import Rightimg from '../img/right.png';
import Underimg from '../img/under.png';

function Header() {
    const navigate = useNavigate();

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className="header-container-header">
                <div className="box-container-header">
                    <div className="login-box-header">
                        <img 
                            src={Loginimg} 
                            className="login-header" 
                            onClick={() => navigate('/login')} 
                        />
                        <img 
                            src={Signimg} 
                            className="signup-header" 
                            onClick={() => navigate('/signup')} 
                        />
                    </div>
                    <img src={Underimg} className="underimg" />
                </div>
                <div className="menu-container-header">
                    <div className="menu-box-header" onClick={() => handleScroll('main')}>
                        <div className="circle-header">
                            <img src={Mainimg} />
                        </div>
                        <div className="title-header">
                            <p>MAIN</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>
                    <div className="menu-box-header" onClick={() => handleScroll('popular')}>
                        <div className="circle-header">
                            <img src={Fireimg} />
                        </div>
                        <div className="title-header">
                            <p>POPULAR</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>
                    <div className="menu-box-header" onClick={() => handleScroll('recent')}>
                        <div className="circle-header">
                            <img src={Timeimg} />
                        </div>
                        <div className="title-header">
                            <p>RECENT</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>  
                    <div className="menu-box-header" onClick={() => handleScroll('contact')}>
                        <div className="circle-header">
                            <img src={Callimg} className="callimg" />
                        </div>
                        <div className="title-header">
                            <p>CONTACT</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>
                    <div className="menu-box-header" onClick={() => navigate('/portfolio')}>
                        <div className="circle-header">
                            <img src={Writeimg} className="writeimg"/>
                        </div>
                        <div className="title-header">
                            <p>PORTFOLIO</p>
                        </div>
                        <img src={Rightimg} className="right-header" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;