import React from "react";
import { withRouter } from "react-router-dom";
import "./HeaderNav.scss";
import "../../../Styles/common.scss";

class Nav extends React.Component {
  state = {
    title: [
      { index: 1, name: "Special-Order" },
      { index: 2, name: "Showcase" },
      { index: 3, name: "29TV" },
      { index: 4, name: "PT" },
      { index: 5, name: "Welove" },
    ],
    category: [
      { index: 1, name: "Women" },
      { index: 2, name: "ACC" },
      { index: 3, name: "MEN" },
      { index: 4, name: "BEAUTY" },
      { index: 5, name: "TECH+" },
      { index: 6, name: "CULTURE" },
    ],
    submenu: [
      { index: 1, name: "Best" },
      { index: 2, name: "Event" },
      { index: 3, name: "Brand" },
      { index: 4, name: "Lookbook" },
    ],
    icon: [
      { index: 1, className: "fas fa-user", name: "MY PAGE" },
      { index: 2, className: "fas fa-heart", name: "MY HEART" },
      { index: 3, className: "fas fa-shopping-bag", name: "SHOPPING BAG" },
      { index: 4, className: "fas fa-sign-in-alt", name: "LOGIN" },
    ],
  };

  render() {
    const { title, category, submenu, icon } = this.state;

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
              {icon.map(({ name, index, className }) => (
                <i key={index} className={className}>
                  <span className="menuIcon">{name}</span>
                </i>
              ))}
            </div>
          </div>
          <div className="navRowContainer">
            <div className="menuContainer">
              {title.map(({ name, index }) => (
                <span key={index} className="title">
                  {name}
                </span>
              ))}
            </div>
            <i className="fas fa-search fa-2x" />
          </div>
          <div className="navRowContainer">
            <div className="CategoryColumnContainer">
              <div className="categoryCollection">
                {category.map(({ name, index }) => (
                  <span key={index} className="category">
                    {name}
                  </span>
                ))}
              </div>
              <div className="border" />
              <div className="navSubmenu">
                {submenu.map(({ name, index }) => (
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
