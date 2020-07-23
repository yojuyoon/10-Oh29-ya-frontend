import React from "react";
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

  render() {
    const { menuClicked } = this.state;
    return (
      <li
        onClick={this.handleCategory}
        className={menuClicked ? "CategoryItem clicked" : "CategoryItem"}
      >
        {this.props.item}
      </li>
    );
  }
}

export default CategoryItem;
