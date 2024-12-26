import React from "react";
import Header from "../components/Header";
import Main from "../components/main";
import Popular from "../components/popular";
import Recent from "../components/recent";
import Contact from "../components/contact";
import Footer from "../components/footer";
import "../styles/home.css";

function Home() {
    return (
        <>
            <Header />
            <div id="main">
                <Main />
            </div>
            <div id="popular">
                <Popular />
            </div>
            <div id="recent">
                <Recent />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </>
    );
}

export default Home;
