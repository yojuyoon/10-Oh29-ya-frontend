import React from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import "../../Styles/common.scss";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    token: "",
    checked: false,
  };

  handlerlogin = () => {
    const { email, password, token, checked } = this.state;

    fetch("http://10.58.4.0:8000/account/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        token,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          if (checked) {
            localStorage.setItem("token", res.token);
          } else {
            sessionStorage.setItem("token", res.token);
          }
          this.props.history.push("/AlternatingNav");
        } else {
          alert("다시 로그인 해주세요.");
        }
      });
  };

  handlerInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerChecked = (e) => {
    const {
      target: { checked },
    } = e;
    this.setState({ checked });
  };

  render() {
    const { handlerInput, handlerlogin, handlerChecked } = this;
    const { checked } = this.state;

    return (
      <div className="LoginContainer">
        <p className="loginTitle">로그인</p>
        <div className="loginBorder" />
        <div className="columnContainer">
          <input
            className="loginInput"
            name="email"
            onChange={handlerInput}
            placeholder="아이디 / 이메일 아이디 입력"
          />
          <input
            className="loginInput"
            name="password"
            onChange={handlerInput}
            placeholder="비밀번호"
          />
          <div className="autoLogin">
            <input
              className="autoLoginBtn"
              type="checkbox"
              onChange={handlerChecked}
              checked={checked}
            />
            <span>로그인 상태 유지</span>
          </div>
          <button className="loginBtn" onClick={handlerlogin} type="button">
            로그인하기
          </button>
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
              <img
                className="logoImg"
                alt="logo  naver"
                src="/Images/naverLogo.png"
              />
            </div>
            <p className="loginText">네이버로 로그인하기</p>
          </div>
          <div className="snsLoginContainer">
            <div className="imgContainer">
              <img
                className="logoImg"
                alt="logo  kakao"
                src="/Images/kakaoLogo.png"
              />
            </div>
            <p className="loginText">카카오로 로그인하기</p>
          </div>
          <div className="snsLoginContainer">
            <div className="imgContainer">
              <img
                className="logoImg"
                alt="logo  facebook"
                src="/Images/facebookLogo.png"
              />
            </div>
            <p className="loginText">페이스북으로 로그인하기</p>
          </div>
          <div className="snsLoginContainer">
            <div className="imgContainer">
              <img
                className="logoImg"
                alt="logo  apple"
                src="/Images/appleLogo.png"
              />
            </div>
            <p className="loginText">Apple로 계속하기</p>
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
