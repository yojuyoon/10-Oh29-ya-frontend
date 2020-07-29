import React from "react";
import { withRouter, Link } from "react-router-dom";
import { navData } from "../navData";
import "./HeaderNav.scss";

class Nav extends React.Component {
  logoutHandler = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    this.props.history.push("/SpecialOrder");
  };
  render() {
    const { logoutHandler } = this;
    return (
      <nav className="Nav">
        <div className="couponBox">
          <span className="couponText">
            29CM 첫 쇼핑을 지원하는 앱 <span className="redColor">15%</span>
            할인 쿠폰
          </span>
          <span className="couponDownContainer">
            쿠폰받기 <i className="fas fa-download" />
          </span>
        </div>
        <div className="menuColumnContainer">
          <div className="logoRowContainer">
            <div className="imgContainer">
              <img
                className="logoImg"
                alt="logo  square"
                src="/Images/logoRectangle.PNG"
              />
            </div>
            <div>
              <i className="fas fa-user">
                <span className="menuIcon">MY PAGE</span>
              </i>
              <i className="fas fa-heart">
                <span className="menuIcon">MY HEART</span>
              </i>
              <i className="fas fa-shopping-bag">
                <span className="menuIcon">SHOPPING BAG</span>
                {localStorage.getItem("cart_count") && (
                  <span className="shoppingNumber">
                    {localStorage.getItem("cart_count")}
                  </span>
                )}
              </i>
              {localStorage.getItem("token") ||
              sessionStorage.getItem("token") ? (
                <i className="fas fa-door-open">
                  <span className="menuIcon" onClick={logoutHandler}>
                    LOGOUT
                  </span>
                </i>
              ) : (
                <i className="fas fa-sign-in-alt">
                  <span className="menuIcon">
                    <a href="/Login">LOGIN</a>
                  </span>
                </i>
              )}
            </div>
          </div>
          <div className="navRowContainer">
            <div className="menuContainer">
              {navData.title.map(({ name, index }) => (
                <Link to="/TwentyNineTV" key={index} className="title">
                  {name}
                  {name === "29TV" ? <span className="dot" /> : null}
                </Link>
              ))}
            </div>
            <i className="fas fa-search fa-2x" />
          </div>
          <div className="navRowContainer">
            <div className="CategoryColumnContainer">
              <div className="categoryCollection">
                {navData.category.map(({ name, index }) => (
                  <Link key={index} to="/Product" className="category">
                    {name}
                  </Link>
                ))}
              </div>
              <div className="border" />
              <div className="navSubmenu">
                {navData.submenu.map(({ name, index }) => (
                  <span key={index} className="submenu">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
