import React from "react";
import "../styles/contact.css";
import Callimg from "../img/call.png";
import Mailimg from "../img/mail.png";

function Contact() {
    return (
        <>
            <div className="line"/>
            <div className="background-contact">
                <div className="menu-left-contact">
                    <div className="contents-container-contact">
                        <div className="titlearea-contact">
                            <p className="contact-us">Contact Us</p>
                        </div>
                        <div className="detailarea-contact">
                            <p className="details">문의 사항은 전화혹은 메일을 통하여 연락부탁드립니다.</p>
                        </div>
                        <div className="callarea-contact">
                            <div className="circle-contact">
                                <img src={Callimg} className="call-img"/>
                            </div>
                            <div className="write-contact">010-1234-5678</div>
                        </div>
                        <div className="mailarea-contact">
                            <div className="circle-contact">
                                <img src={Mailimg} className="mail-img"/>
                            </div>
                            <div className="write-contact">email@example.com</div>
                        </div>
                    </div>
                </div>
                <div className="line-container-contact">
                    <div className="lline-contact"/>
                </div>
                <div className="menu-right-contact">
                    <form className="form-contact">
                        <div className="mc name-container-contact">
                            <p className="title-contact">name</p>
                            <input type="text"/>
                        </div>
                        <div className="mc email-container-contact">
                            <p className="title-contact">email</p>
                            <input type="email"/>
                        </div>
                        <div className="mc phone-container-contact">
                            <p className="title-contact">phone</p>
                            <input type="tel"/>
                        </div>
                        <div className="mc detail-container-contact">
                            <p className="title-contact">detail</p>
                            <textarea></textarea>
                        </div>
                        <div className="mc submit-container-contact">
                            <input type="submit" value="submit" className="lhs"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="line"/>
        </>
    )
}

export default Contact;