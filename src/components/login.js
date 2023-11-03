import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/actions";
import Header from "./header";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function doLogin() {
    window.location.href = "http://15.165.231.19:8080/api/login/kakao";
  }

  // localhost:3000/login?code=12312123&method=kakao
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  const method = "kakao";
  console.log("code: " + code);

  if (code) {
    // 외부 인증 서버의 엔드포인트와 클라이언트 정보를 설정합니다.
    const authServerEndpoint = `http://15.165.231.19:8080/api/login/kakao/token?code=${code}`; // 외부 인증 서버의 토큰 엔드포인트
    console.log("endPoint: " + authServerEndpoint);

    // 토큰 요청을 보냅니다.
    axios
      .get(authServerEndpoint, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // 토큰을 성공적으로 받았을 때 처리합니다.
        const accessToken = response.data.accessToken;
        console.log("Access Token:", accessToken);
        dispatch(setToken(accessToken));
        navigate("/");

        // TODO: 토큰을 저장하거나 필요한 작업을 수행합니다.
      })
      .catch((error) => {
        // 에러 처리
        console.error("Error:", error);
      });
  } else {
    console.error('No "code" parameter found in the URL.');
  }

  return (
    <div className="body">
      <Header></Header>
      <div className="login-wrap">
        <p className="login-info">
          아래의 로그인 버튼을 눌러 로그인을 진행 해주세요.
        </p>
        <img
          src="kakao_login_medium_wide.png"
          onClick={doLogin}
          className="login-option"
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        ></img>
        <img
          src="web_light_sq_ctn.svg"
          className="login-option"
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        ></img>
        <img
          src="facebook_login.png"
          className="login-option"
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        ></img>
      </div>
    </div>
  );
}

export default Login;
