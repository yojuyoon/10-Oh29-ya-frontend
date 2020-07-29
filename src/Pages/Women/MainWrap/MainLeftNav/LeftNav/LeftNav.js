import React from "react";
import { Route, Link } from "react-router-dom";
// import "./TwoBannerItem.scss";

class LeftNav extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <li className="category">
        <Link to="/">
          <button>{item}</button>
        </Link>
      </li>
    );
  }
}

export default LeftNav;
