import React from "react";
import { Link } from "react-router-dom";

class LeftNav extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <li className="category">
        <Link to={`/ProductList/${this.props.gender}/${item}`}>
          <button>{item}</button>
        </Link>
      </li>
    );
  }
}

export default LeftNav;
