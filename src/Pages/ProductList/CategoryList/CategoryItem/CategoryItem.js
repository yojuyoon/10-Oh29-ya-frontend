import React from "react";
import { Link } from "react-router-dom";

import "./CategoryItem.scss";

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClicked: false,
    };
  }

  handleCategory = () => {
    this.setState({ menuClicked: true });
  };

  checkand = () => {
    console.log("첵첵");
  };

  render() {
    const { menuClicked } = this.state;
    return (
      <li
        onClick={this.handleCategory && this.checkand}
        className={menuClicked ? "CategoryItem clicked" : "CategoryItem"}
      >
        <Link>{this.props.item}</Link>
      </li>
    );
  }
}

export default CategoryItem;
