import React from "react";
import { withRouter } from "react-router-dom";
import "./HeaderNav.scss";
import "../../../Styles/common.scss";

class Nav extends React.Component {
  render() {
    return (
      <>
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
          <div className="navMenuColumnContainer">
            <div className="navLogoRowContainer">
              <div className="navLogoImgContainer">
                <img
                  className="navLogoImg"
                  alt="logo  square"
                  src="Images/logoRectangle.PNG"
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
                </i>
                <i className="fas fa-sign-in-alt">
                  <span className="menuIcon">LOGIN</span>
                </i>
              </div>
            </div>
            <div className="navRowContainer">
              <div className="navMenuContainer">
                <span className="menuTitleText">Special-Order</span>
                <span className="menuTitleText">Showcase</span>
                <span className="menuTitleText">29TV</span>
                <span className="menuTitleText">PT</span>
                <span className="menuTitleText">Welove</span>
              </div>
              <i className="fas fa-search fa-2x" />
            </div>
            <div className="navRowContainer">
              <div className="CategoryColumnContainer">
                <div className="navMenuCategory">
                  <span className="menuCategoryText">Women</span>
                  <span className="menuCategoryText">Showcase</span>
                  <span className="menuCategoryText">ACC</span>
                  <span className="menuCategoryText">MEN</span>
                  <span className="menuCategoryText">BEAUTY</span>
                  <span className="menuCategoryText">TECH+</span>
                  <span className="menuCategoryText">CULTURE</span>
                </div>
                <div className="border" />
                <>
                  <span className="subMenuText">Best</span>
                  <span className="subMenuText">Event</span>
                  <span className="subMenuText">Brand</span>
                  <span className="subMenuText">Lookbook</span>
                </>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Nav);
