import React from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";
import "../../../Styles/common.scss";

class HeaderNav extends React.Component {
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
      { index: 1, className: "fas fa-user" },
      { index: 2, className: "fas fa-heart" },
      { index: 3, className: "fas fa-shopping-bag" },
      { index: 4, className: "fas fa-sign-in-alt" },
    ],
  };

  render() {
    const { title, category, submenu, icon } = this.state;

    return (
      <nav className="NavActive">
        <div className="navContainer">
          <div className="logoContainer">
            <img
              className="logoImg"
              alt="logo  square"
              src="Images/logoSquare.PNG"
            />
          </div>
          <div className="navMenuContainer">
            <div className="navRowContainer">
              <div className="menuTitle">
                {title.map(({ name, index }) => (
                  <span key={index} className="title">
                    {name}
                  </span>
                ))}
              </div>
              <div className="navMenuIcon">
                {icon.map(({ index, className }) => (
                  <i key={index} className={className} />
                ))}
              </div>
            </div>
            <div className="navRowContainer">
              <div className="categoryColumnContainer">
                <div className="categoryColletion">
                  {category.map(({ name, index }) => (
                    <span key={index} className="category">
                      {name}
                    </span>
                  ))}
                </div>
                <div className="border" />
                <div className="submenuCollection">
                  {submenu.map(({ name, index }) => (
                    <span key={index} className="submenu">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <i className="fas fa-search fa-lg" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(HeaderNav);
