import React from "react";
import { Route, Link } from "react-router-dom";
import "./MainLeftNav.scss";
import LeftNav from "./LeftNav/LeftNav";

class MainLeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [
        "NEW",
        "BEST",
        "ONlY 29CM",
        "상의",
        "셔츠",
        "바지",
        "니트",
        "신발",
        "아우터",
        "가방, 지갑",
        "액세서리",
        "아이웨어",
        "주얼리",
        "수영복",
      ],
    };
  }

  render() {
    return (
      <>
        <div className="MainLeftNav">
          <div className="categoryInner">
            <ul>
              <li className="categoryTitle">
                <button>
                  <div className="title">MEN</div>
                </button>
              </li>
              <li className="categoryList">
                <ul>
                  {this.state.categoryData.map((item, i) => {
                    return <LeftNav item={item} key={i} />;
                  })}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default MainLeftNav;
