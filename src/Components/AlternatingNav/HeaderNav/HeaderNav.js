import React from "react";
import { withRouter, Link } from "react-router-dom";
import { navData } from "../navData";
import "./HeaderNav.scss";

class Nav extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="couponBox">
          <span className="couponText">
            29CM 첫 쇼핑을 지원하는 앱 <span className="redColor">15%</span>
            할인 쿠폰
          </span>
          <span className="couponDownContainer">
            쿠폰받기 <i className="fas fa-download"></i>
          </span>
        </div>
        <div className="menuColumnContainer">
          <div className="logoRowContainer">
            <div className="imgContainer">
              <img
                className="logoImg"
                alt="logo  square"
                src="Images/logoRectangle.PNG"
              />
            </div>
            <div>
              {navData.icon.map(({ name, index, className }) => (
                <i key={index} className={className}>
                  <span className="menuIcon">{name}</span>
                </i>
              ))}
            </div>
          </div>
          <div className="navRowContainer">
            <div className="menuContainer">
              {navData.title.map(({ name, index }) => (
                <Link to="/TwentyNineTV" key={index} className="title">
                  {name}
                  {name === "29TV" ? <span className="dot"></span> : null}
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
