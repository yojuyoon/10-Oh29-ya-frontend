import React from "react";
import { Route, Link } from "react-router-dom";
import "./MainLeftNav.scss";
import LeftNav from "./LeftNav/LeftNav";

class MainLeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: [
        "상의",
        "원피스",
        "바지",
        "치마",
        "데님",
        "아우터",
        "스포츠웨어",
        "니트",
        "이너웨어",
        "홈웨어",
        "수영복",
      ],
    };
  }

  render() {
    return (
      <div className="MainLeftNav">
        <div className="categoryInner">
          <ul>
            <li className="categoryTitle">
              <button>
                <div className="title">WOMEN</div>
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
    );
  }
}

export default MainLeftNav;
