import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import "../../Styles/common.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="LoginContainer">
        <p className="loginTitle">로그인</p>
        <div className="loginBorder" />
        <div className="columnContainer">
          <input
            className="loginId"
            placeholder="아이디 / 이메일 아이디 입력"
          />
          <input className="loginPw" placeholder="비밀번호" />
          <div className="autoLogin">
            <input className="autoLoginBtn" type="checkbox"></input>
            <span>로그인 상태 유지</span>
          </div>
          <button className="loginBtn">로그인하기</button>
          <div className="loginNotPossible">
            <p className="LoginNotText">회원가입</p>
            <div className="LoginNotBorder" />
            <p className="LoginNotText">계정찾기</p>
            <div className="LoginNotBorder" />
            <p className="LoginNotText">비밀번호 재설정</p>
          </div>
          <p className="snsLoginTitle">SNS계정으로 로그인하기</p>
          <div className="snsLoginContainer">
            <div className="imgContainer">
              <img className="logoImg" alt="logo" src="/Images/naverLogo.png" />
            </div>
            <p className="loginText">네이버로 로그인하기</p>
          </div>
          <div className="snsLoginContainer">
            <div className="imgContainer">
              <img className="logoImg" alt="logo" src="/Images/kakaoLogo.png" />
            </div>
            <p className="loginText">카카오로 로그인하기</p>
          </div>
          <div className="snsLoginContainer">
            <div className="imgContainer">
              <img
                className="logoImg"
                alt="logo"
                src="/Images/facebookLogo.png"
              />
            </div>
            <p className="loginText">페이스북으로 로그인하기</p>
          </div>
          <div className="snsLoginContainer">
            <div className="imgContainer">
              <img className="logoImg" alt="logo" src="/Images/appleLogo.png" />
            </div>
            <p className="loginText">페이스북으로 로그인하기</p>
          </div>
          <div className="unLogin">
            <p className="unLoginText">2018년 2월 이전 비회원 주문조회 {">"}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
