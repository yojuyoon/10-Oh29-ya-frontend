import React from "react";
import "./MainLeftNav.scss";
import LeftNav from "./LeftNav/LeftNav";
import categoryData from "../../data/categoryData.js";

class MainLeftNav extends React.Component {
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
                {categoryData.map((item, i) => {
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
