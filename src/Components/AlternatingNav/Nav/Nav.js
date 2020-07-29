import React from "react";
import { withRouter, Link } from "react-router-dom";
import { navData } from "../navData";
import "./Nav.scss";

class HeaderNav extends React.Component {
  logoutHandler = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    this.props.history.push("/SpecialOrder");
  };

  render() {
    const { logoutHandler } = this;

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
                <i className="fas fa-user"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-bag"></i>
                <i className="fas fa-sign-out-alt"></i>
                {localStorage.getItem("token") ||
                sessionStorage.getItem("token") ? (
                  <i onClick={logoutHandler} className="fas fa-door-open" />
                ) : (
                  <i className="fas fa-sign-in-alt" />
                )}
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
