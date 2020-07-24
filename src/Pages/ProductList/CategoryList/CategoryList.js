import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import "./CategoryList.scss";

const itemData = [
  "전체",
  "반팔",
  "긴팔",
  "민소매",
  "피케",
  "스웨트 셔츠",
  "후디",
  "집업",
];

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDropDown: false,
    };
  }

  HandleDropDown = () => {
    this.setState({ hideDropDown: !this.state.hideDropDown });
  };

  render() {
    return (
      <div className="CategoryList">
        <div>
          <ul className="categoryTab">
            <div className="categoryLeft">
              {itemData.map((item, i) => {
                return <CategoryItem item={item} key={i} />;
              })}
            </div>
            <div className="dropDownWrap">
              <div className="dropDownBtn">
                <div className="recommend" onClick={this.HandleDropDown}>
                  <div className="wrap">추천순</div>
                  <div>
                    <i class="fas fa-angle-down"></i>
                  </div>
                </div>
                <ul
                  className={
                    this.state.hideDropDown ? "dropDown" : "dropDown hide"
                  }
                >
                  <li>추천순</li>
                  <li>신상품순</li>
                  <li>베스트순</li>
                  <li onClick={this.props.handleSortPriceAscendingOrder}>
                    낮은가격순
                  </li>
                  <li>높은가격순</li>
                  <li>높은할인순</li>
                  <li>베스트리뷰순</li>
                  <li>베스트하트순</li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default CategoryList;
