import React from "react";
import CategoryItem from "./CategoryItem/CategoryItem";
import "./CategoryList.scss";

// const itemData = [
//   "전체",
//   "반팔",
//   "긴팔",
//   "민소매",
//   "피케",
//   "스웨트 셔츠",
//   "후디",
//   "집업",
// ];

const obj = {
  0: "추천순",
  1: "추천순",
  2: "신상품순",
  3: "베스트순",
  4: "낮은가격순",
  5: "높은가격순",
  6: "높은할인순",
  7: "베스트리뷰순",
  8: "베스트하트순",
};

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDropDown: false,
      filterId: 0,
    };
  }

  //토글 방식으로 드롭다운 메뉴를 열고, 닫고 관리하는 함수
  HandleDropDown = () => {
    this.setState({ hideDropDown: !this.state.hideDropDown });
  };

  //주어진 id와 동일한 key값을 가진 메뉴를 객체 obj에서 찾아서 드롭다운 메뉴 안에 보여줌
  handleFilterId = (id) => {
    this.setState({ filterId: id });
  };

  render() {
    return (
      <div className="CategoryList">
        <div>
          <ul className="categoryTab">
            <div className="categoryLeft">
              {this.props.detailList.map((item, i) => {
                return <CategoryItem item={item} key={i} />;
              })}
            </div>
            <div className="dropDownWrap">
              <div className="dropDownBtn">
                <div className="recommend" onClick={this.HandleDropDown}>
                  <div className="wrap">{obj[this.state.filterId]}</div>
                  <div>
                    <i class="fas fa-angle-down"></i>
                  </div>
                </div>
                <ul
                  className={
                    this.state.hideDropDown ? "dropDown" : "dropDown hide"
                  }
                >
                  <li onClick={() => this.handleFilterId(1)}>추천순</li>
                  <li onClick={() => this.handleFilterId(2)}>신상품순</li>
                  <li onClick={() => this.handleFilterId(3)}>베스트순</li>
                  <li onClick={() => this.handleFilterId(4)}>낮은가격순</li>
                  <li
                    onClick={
                      (() => this.handleFilterId(5),
                      this.props.handleSortDescending)
                    }
                  >
                    높은가격순
                  </li>
                  <li onClick={() => this.handleFilterId(6)}>높은할인순</li>
                  <li onClick={() => this.handleFilterId(7)}>베스트리뷰순</li>
                  <li onClick={() => this.handleFilterId(8)}>베스트하트순</li>
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
