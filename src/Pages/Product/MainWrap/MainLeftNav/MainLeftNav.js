import React from "react";
import "./MainLeftNav.scss";

class MainLeftNav extends React.Component {
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
                  <li>
                    <button>NEW</button>
                  </li>
                  <li>
                    <button>BEST</button>
                  </li>
                  <li>
                    <button>ONlY 29CM</button>
                  </li>
                  <li>
                    <button>상의</button>
                  </li>
                  <li>
                    <button>셔츠</button>
                  </li>
                  <li>
                    <button>바지</button>
                  </li>
                  <li>
                    <button>니트</button>
                  </li>
                  <li>
                    <button>신발</button>
                  </li>
                  <li>
                    <button>아우터</button>
                  </li>
                  <li>
                    <button>가방, 지갑</button>
                  </li>
                  <li>
                    <button>액세서리</button>
                  </li>
                  <li>
                    <button>아이웨어</button>
                  </li>
                  <li>
                    <button>주얼리</button>
                  </li>
                  <li>
                    <button>수영복</button>
                  </li>
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
