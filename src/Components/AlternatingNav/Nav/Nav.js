import React from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";
import "../../../Styles/common.scss";

class HeaderNav extends React.Component {
  render() {
    return (
      <nav className="NavActive">
        <div className="navContainer">
          <div className="navLogoContainer">
            <img
              className="navLogoImg"
              alt="logo  square"
              src="Images/logoSquare.PNG"
            />
          </div>
          <div className="navMenuContainer">
            <div className="navRowContainer">
              <div className="navMenuTitle">
                <span className="menuTitleText">Special-Order</span>
                <span className="menuTitleText">Showcase</span>
                <span className="menuTitleText">29TV</span>
                <span className="menuTitleText">PT</span>
                <span className="menuTitleText">Welove</span>
              </div>
              <div className="navMenuIcon">
                <i class="fas fa-user" />
                <i class="fas fa-heart" />
                <i class="fas fa-shopping-bag" />
                <i class="fas fa-sign-in-alt" />
              </div>
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
              <i class="fas fa-search fa-lg" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
