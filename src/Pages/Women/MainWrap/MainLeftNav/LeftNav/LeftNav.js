import React from "react";
import { Link } from "react-router-dom";

class LeftNav extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <li className="category">
        <Link to={`/ProductList/Women/${item}`}>
          <button>{item}</button>
        </Link>
      </li>
    );
  }
}

export default LeftNav;
