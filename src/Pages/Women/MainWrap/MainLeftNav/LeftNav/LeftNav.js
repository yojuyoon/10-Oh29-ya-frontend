import React from "react";
import { Link } from "react-router-dom";
// import "./TwoBannerItem.scss";

class LeftNav extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <li className="category">
        <Link to={`Women/${item}`}>
          <button>{item}</button>
        </Link>
      </li>
    );
  }
}

export default LeftNav;
