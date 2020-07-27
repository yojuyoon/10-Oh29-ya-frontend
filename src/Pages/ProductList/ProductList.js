import React from "react";
import "./ProductList.scss";
import "../../Styles/reset.scss"; //지울거
import "./LeftNav/LeftNav.scss";
import LeftNav from "./LeftNav/LeftNav";
import ProductItem from "./ProductItem/ProductItem";
import CategoryList from "./CategoryList/CategoryList";
import FilterNav from "./FilterNav/FilterNav";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      itemData: [],
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = () => {
    //됐던거
    // fetch("http://10.58.4.0:8000/product/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     category: "WOMEN",
    //     subcategory: "상의",
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     // console.log(res);

    //     this.setState({
    //       itemData: res.data,
    //     });
    //   });

    //내로컬
    //   fetch("http://localhost:3000/data/product.json")
    //     .then((response) => response.json())
    //     .then((response) => {
    //       this.setState({
    //         itemData: response.data,
    //       });
    //     });
    // };

    ////여긴 하트 받을 때 썼던 민호님 서버
    fetch("http://10.58.4.24:8000/product", {
      method: "POST",
      body: JSON.stringify({
        user: 2,
        category: "WOMEN",
        subcategory: "상의",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          itemData: res.data,
        });
        console.log(res);
      });
  };
  ////////////////////////////////////////////////////////////

  //itemData는 fetch후 res.data를 담은 상태

  //이 친구는 onClick했을 때 할인 중인 상품들만 보여주는 함수
  handleFilterDiscount = () => {
    this.setState({
      itemData: this.state.itemData.filter((item) => {
        return item.discount_rate != 0;
      }),
    });
  };

  //onClick했을 때, 10000원 이하의 제품을 보여주는 함수
  handleFilterRate = () => {
    console.log("여기도 눌렸어!!");

    this.setState({
      itemData: this.state.itemData.filter((item) => {
        return (
          parseInt(item.discount_price || item.price) < 10000 &&
          parseInt(item.discount_price)
        );
      }),
    });
  };
  //////////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="ProductList">
        <div className="categoryWrap">
          <div className="left">
            <LeftNav />
            <FilterNav
              handleFilterDiscount={this.handleFilterDiscount}
              handleFilterRate={this.handleFilterRate}
            />
          </div>
          <div className="right">
            <CategoryList
              handleSortPriceAscendingOrder={this.handleSortPriceAscendingOrder}
            />
            <ul className="productSection">
              {this.state.itemData.map((item) => {
                return (
                  <ProductItem
                    data={item}
                    key={item.id}
                    likeNum={item.like_num}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
