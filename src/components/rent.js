import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import axios from "axios";
import { useState } from "react";


function Rent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [rentResult, setRentResult] = useState("대여 시도중입니다. 잠시만 기다려 주십시오.");

    // localhost:3000/login?code=12312123&method=kakao
    const urlParams = new URLSearchParams(window.location.search);
    const cycleID = urlParams.get("cycleID");

    if (cycleID) {
        // 외부 인증 서버의 엔드포인트와 클라이언트 정보를 설정합니다.
        const authServerEndpoint = `http://15.165.231.19:8080/cycles/rent`; // 외부 인증 서버의 토큰 엔드포인트
    
        // 요청 데이터
        const requestData = {
            "cycleID": cycleID,
        };
    
        // 요청 헤더
        const requestHeaders = {
            "Content-Type": "application/json",
        };
    
        // 토큰 요청을 보냅니다.
        axios.post(authServerEndpoint, requestData, { headers: requestHeaders })
            .then((response) => {
                // 성공 응답 처리
                if (response.status === 201) {
                    setRentResult("대여가 완료되었습니다.")
                } else if (response.status === 400) {
                    // 400 Bad Request 응답 처리
                    // response.data를 사용하여 응답 데이터에 접근할 수 있습니다.
                    setRentResult("이미 대여중인 살랑이입니다.")
                } else {
                    // 다른 응답 코드에 대한 처리
                    setRentResult("대여에 실패하였습니다. 다시 시도해주세요.")
                }
            })
            .catch((error) => {
                // 오류 응답 처리
                console.error("Error:", error);
            });
    } else {
        console.error('No "cycleID" parameter found.');
    }

    const goHome = () => {
        navigate("/");
    }

    return (
        <div className="body">
            <Header></Header>
            <div className="rent-wrap">
                <div className="rent-title">살랑이 대여</div>
                <div className="rent-result">{rentResult}</div>
                <div className="rent-footer">
                    <div className="goHome" onClick={goHome}>홈으로</div>
                </div>
            </div>
        </div>
    );
}

export default Rent;
