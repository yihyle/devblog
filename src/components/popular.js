import React, { useEffect } from "react";
import "../styles/popular.css";
import Right2img from "../img/right2.png";
import Leftimg from "../img/left2.png";
import Backimg1 from "../img/back1.jpg";
import Backimg2 from "../img/back2.jpg";
import Backimg3 from "../img/back3.jpg";

function Popular() {
    useEffect(() => {
        const container = document.querySelector('.slide-container');
        const slides = document.querySelectorAll('.content-container');
        let currentIndex = 1; // 기본으로 두 번째 사진 표시
        const totalSlides = slides.length;

        // 초기 슬라이드 위치 설정
        container.style.transform = `translateX(-${currentIndex * 800}px)`;

        document.querySelector('.arrow.left').addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
            updateSlide();
        });

        document.querySelector('.arrow.right').addEventListener('click', function() {
            currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
            updateSlide();
        });

        function updateSlide() {
            container.style.transform = `translateX(-${currentIndex * 800}px)`;
        }
    }, []);

    return (
        <>
            <div className="background-container-popular">
                <div className="title-popular">
                    <p>Popular Posts</p>
                </div>
                <div className="line-popular" />
                <div className="slide-container-popular">
                    <div id="choice">
                        <div className="section-container">
                            <div className="choice-container">
                                <div className="slide-container">
                                    <div className="content-container">
                                        <img src={Backimg1} className="backimg" />
                                    </div>
                                    <div className="content-container">
                                        <img src={Backimg2} className="backimg" />
                                    </div>
                                    <div className="content-container">
                                        <img src={Backimg3} className="backimg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-container-popular">
                    <div className="circle-popular">
                        <div className="arrow left">
                            <img src={Leftimg} className="lleft" />
                        </div>
                    </div>
                    <div className="circle-popular">
                        <div className="arrow right">
                            <img src={Right2img} className="rright" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popular;
