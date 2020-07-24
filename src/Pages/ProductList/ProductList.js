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

  // 유동 라우터
  // componentDidUpdate = (prevProps, prevState) => {
  //   if(prevState.itemData !== this.state.itemData){
  //     this.handleData();
  //   }
  // }

  handleData = () => {
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

    fetch("http://localhost:3000/data/product.json")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          itemData: response.data,
        });
      });
  };

  ////여긴 filter test
  ////////////////////////////////////////////////////////////

  //itemData는 fetch후 res.data를 담은 상태

  //이 친구는 onClick했을 때 할인 중인 상품들만 보여주는 함수
  handleFilterDiscount = () => {
    console.log("눌렸어!!");

    this.setState({
      itemData: this.state.itemData.filter((item) => {
        return item.discount_rate != 0;
      }),
    });
  };

  //얘는 onClick했을 때, 10000원 이하의 제품을 보여주는 함수
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

  // handleSortPriceAscendingOrder = () => {
  //   console.log("오름차순 눌렸어🙃");
  //   console.log(this.state.itemData);

  //   this.setState({
  //     itemData: this.state.itemData.price...?
  //   });
  // };

  // handleSortPriceDescendingOrder;

  render() {
    console.log();
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
              {this.state.itemData.map((item, i) => {
                return <ProductItem data={item} key={i} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
