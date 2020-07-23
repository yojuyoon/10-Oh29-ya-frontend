import React from "react";
import "./ProductList.scss";
import "../../Styles/reset.scss"; //지울거

import ProductItem from "./ProductItem";
import CategoryList from "./CategoryList/CategoryList";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/product.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemData: res.data,
        });
      });
  }

  render() {
    return (
      <div className="ProductList">
        <div className="categoryWrap">
          <div className="left">
            <div className="fakeNav"></div>
          </div>
          <div className="right">
            <CategoryList />
            <div className="productContent">
              <ul className="productSection">
                {this.state.itemData.map((item, i) => {
                  return <ProductItem data={item} key={i} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
