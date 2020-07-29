import React from "react";
import { withRouter, Link } from "react-router-dom";
import { navData } from "../navData";
import "./Nav.scss";

class HeaderNav extends React.Component {
  render() {
    return (
      <nav className="NavActive">
        <div className="navContainer">
          <div className="logoContainer">
            <img
              className="logoImg"
              alt="logo  square"
              src="/Images/logoSquare.PNG"
            />
          </div>
          <div className="navMenuContainer">
            <div className="navRowContainer">
              <div className="menuTitle">
                {navData.title.map(({ name, index }) => (
                  <Link to="/TwentyNineTV" key={index} className="title">
                    {name}
                    {name === "29TV" ? <span className="dot"></span> : null}
                  </Link>
                ))}
              </div>
              <div className="navMenuIcon">
                {navData.icon.map(({ index, className }) => (
                  <i key={index} className={className} />
                ))}
              </div>
            </div>
            <div className="navRowContainer">
              <div className="categoryColumnContainer">
                <div className="categoryColletion">
                  {navData.category.map(({ name, index }) => (
                    <Link key={index} to="/Product" className="category">
                      {name}
                    </Link>
                  ))}
                </div>
                <div className="border" />
                <div className="submenuCollection">
                  {navData.submenu.map(({ name, index }) => (
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
