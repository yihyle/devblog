import React, { useEffect } from "react";
import Backgroundimg from "../img/background.jpg";
import '../styles/main.css';

function Main() {
    useEffect(() => {
        const $text = document.querySelector(".typing-main .text-main");

        const letters = ["Portfolio", "dev-blog"];
        const speed = 100; // 타이핑 속도
        let i = 0;
        let currentText = ""; // 현재 텍스트

        const typing = async () => {
            const letter = letters[i].split(""); // 문자열을 배열로 분리

            // 타이핑 효과
            while (letter.length) {
                await wait(speed);
                currentText += letter.shift();
                $text.textContent = currentText; // 텍스트 갱신
            }

            await wait(3000); // 3초 대기

            remove(); // 텍스트 지우기
        };

        const remove = async () => {
            let letter = currentText.split(""); // 현재 텍스트를 배열로 분리

            // 텍스트 지우기
            while (letter.length) {
                await wait(speed);
                letter.pop(); // 마지막 글자 제거
                currentText = letter.join(""); // 배열을 다시 문자열로 결합
                $text.textContent = currentText; // 텍스트 갱신
            }

            i = i + 1 < letters.length ? i + 1 : 0; // 배열 끝에 도달하면 처음으로 돌아감
            typing(); // 다시 타이핑 시작
        };

        // 일정 시간 후 타이핑 시작
        function wait(ms) {
            return new Promise((res) => setTimeout(res, ms));
        }

        setTimeout(typing, 1500); // 페이지 로드 후 1.5초 뒤 타이핑 시작
    }, []);

    return (
        <>
            <div className="background-container-main">
                <img src={Backgroundimg} className="background-main" alt="background" />
                <div className="background-cover-main">
                    <p className="up-main">Welcome to</p>
                    <p className="down-main typing-main">
                        <span className="text-main"></span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Main;
