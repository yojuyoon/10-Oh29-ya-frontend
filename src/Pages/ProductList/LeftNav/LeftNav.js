import React from "react";
import LeftNav from "./LeftNavItem/LeftNavItem";
import "./NavLeft.scss";
import categoryData from "./../data/categoryData";

class MainLeftNav extends React.Component {
  render() {
    const { gender } = this.props;

    return (
      <div className="MainLeftNav">
        <div className="categoryInner">
          <ul>
            <li className="categoryTitle">
              <button>
                <div className="title">{gender}</div>
              </button>
            </li>
            <li className="categoryList">
              <ul>
                {gender === "MEN"
                  ? categoryData[0].map((item, i) => {
                      return (
                        <LeftNav
                          item={item}
                          gender={this.props.gender}
                          key={i}
                        />
                      );
                    })
                  : categoryData[1].map((item, i) => {
                      return (
                        <LeftNav
                          item={item}
                          gender={this.props.gender}
                          key={i}
                        />
                      );
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
