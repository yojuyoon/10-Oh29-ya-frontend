import React from "react";
import { Route, Link } from "react-router-dom";

const categoryData = [
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
];

class LeftNav extends React.Component {
  render() {
    return (
      <>
        <div className="LeftNav">
          <div className="categoryInner">
            <ul>
              <li className="categoryTitle">
                <button>
                  <div className="title">MEN</div>
                </button>
              </li>
              <li className="categoryList">
                <ul>
                  {categoryData.map((item) => {
                    return (
                      <li className="category">
                        <Link to="/">
                          <button>{item}</button>
                        </Link>
                      </li>
                    );
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

export default LeftNav;
