import React from "react";
import { Route, Link } from "react-router-dom";
// import "./TwoBannerItem.scss";

class LeftNav extends React.Component {
  render() {
    // console.log(this.props);
    const { item } = this.props;

    return (
      //추후 수정 필요 일단 default로 MEN

      // className={subcategory === item ? "category clicked" : "category"}

      <li className="category">
        <Link to={`/ProductList/MEN/${item}`}>
          <button>{item}</button>
        </Link>
      </li>
    );
  }
}

export default LeftNav;
