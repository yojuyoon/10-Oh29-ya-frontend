import React from "react";
import "./ProductComponent.scss";
import ProductComponentItem from "./ProductComponentItem/ProductComponentItem";

class ProductComponent extends React.Component {
  render() {
    return (
      <div className="ProductComponent">
        <div className="mainContainerCategory 밑에 컴포넌트들">
          <ul>
            <ProductComponentItem />
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
