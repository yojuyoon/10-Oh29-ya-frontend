import React from "react";
import "./ProductList.scss";
import "../../Styles/reset.scss"; //지울거
import { Route, Link } from "react-router-dom";

import ProductItem from "./ProductItem";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [
        {
          img: "/images/hyeonji/cat/cat1.jpg",
          brand: "폴로 랄프로렌",
          name: "폴로 랄프로렌 남성 라운드 반팔티셔츠 컬렉션 (17color)",
          sellPrice: "109,000",
          discountRate: "82%",
          discountedPrice: "19,900",
        },
        {
          img: "/images/hyeonji/cat/cat1.jpg",
          brand: "폴로 랄프로렌",
          name: "폴로 랄프로렌 남성 라운드 반팔티셔츠 컬렉션 (17color)",
          sellPrice: "109,000",
          discountRate: "82%",
          discountedPrice: "19,900",
        },
        {
          img: "/images/hyeonji/cat/cat1.jpg",
          brand: "폴로 랄프로렌",
          name: "폴로 랄프로렌 남성 라운드 반팔티셔츠 컬렉션 (17color)",
          sellPrice: "109,000",
          discountRate: "82%",
          discountedPrice: "19,900",
        },
        {
          img: "/images/hyeonji/cat/cat1.jpg",
          brand: "폴로 랄프로렌",
          name: "폴로 랄프로렌 남성 라운드 반팔티셔츠 컬렉션 (17color)",
          sellPrice: "109,000",
          discountRate: "82%",
          discountedPrice: "19,900",
        },
        {
          img: "/images/hyeonji/cat/cat1.jpg",
          brand: "폴로 랄프로렌",
          name: "폴로 랄프로렌 남성 라운드 반팔티셔츠 컬렉션 (17color)",
          sellPrice: "109,000",
          discountRate: "82%",
          discountedPrice: "19,900",
        },
      ],
    };
  }

  render() {
    return (
      <div className="ProductList">
        <div className="categoryWrap">
          <div className="left">
            <div className="fakeNav">이야이</div>
          </div>
          <div className="right">
            <div className="categoryTab">
              <ul className="categoryList">
                <li>
                  <Link to="/">전체</Link>
                </li>
                <li>
                  <Link to="/">반팔</Link>
                </li>
                <li>
                  <Link to="/">긴팔</Link>
                </li>
                <li>
                  <Link to="/">민소매</Link>
                </li>
                <li>
                  <Link to="/">피케</Link>
                </li>
                <li>
                  <Link to="/">스웨트 셔츠</Link>
                </li>
                <li>
                  <Link to="/">후디</Link>
                </li>
                <li>
                  <Link to="/">집업</Link>
                </li>
              </ul>
            </div>
            <div className="productContent">
              <ul className="productSection">
                {this.state.itemData.map((item, i) => {
                  return <ProductItem data={this.state.itemData} key={i} />;
                })}
                {/* <ProductItem data={this.state.itemData} /> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
