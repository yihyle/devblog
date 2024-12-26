import React, { useEffect } from "react";
import "../styles/recent.css";
import { useNavigate } from "react-router-dom";
import Right2img from "../img/right2.png";
import Leftimg from "../img/left2.png";
import Backimg1 from "../img/back1.jpg";
import Backimg2 from "../img/back2.jpg";
import Backimg3 from "../img/back3.jpg";

function Recent() {
    const navigate = useNavigate();

    useEffect(() => {
        const container = document.querySelector('.slide-container-recent');
        const slides = document.querySelectorAll('.content-container-recent');
        let currentIndex = 1; // 기본적으로 두 번째 사진 표시
        const totalSlides = slides.length;

        // 슬라이드 초기 위치 설정
        container.style.transform = `translateX(-${currentIndex * 800}px)`;

        document.querySelector('.arrow-left').addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            updateSlide();
        });

        document.querySelector('.arrow-right').addEventListener('click', function() {
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            updateSlide();
        });

        function updateSlide() {
            container.style.transform = `translateX(-${currentIndex * 800}px)`;
        }
    }, []);

    return (
        <>
            <div className="background-container-recent">
                <div className="title-recent">
                    <p>Recent Posts</p>
                </div>
                <div className="line-recent" />
                <div className="slide-container-recent">
                    <div id="choice-recent">
                        <div className="section-container-recent">
                            <div className="choice-container-recent">
                                <div className="slide-container-recent">
                                    <div className="content-container-recent">
                                        <img src={Backimg2} className="backimg"/>
                                    </div>
                                    <div className="content-container-recent">
                                        <img src={Backimg1} className="backimg"/>
                                    </div>
                                    <div className="content-container-recent">
                                        <img src={Backimg3} className="backimg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-container-recent">
                    <div className="circle-recent">
                        <div className="arrow-left">
                            <img src={Leftimg} className="lleft" />
                        </div>
                    </div>
                    <div className="circle-recent">
                        <div className="arrow-right">
                            <img src={Right2img} className="rright" />
                        </div>
                    </div>
                </div>
                <div className="more-container-recent">
                    <div className="ccontainer-recent" onClick={() => navigate('/portfolio')}>
                        <h1 className="more-recent">GET MORE</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Recent;
