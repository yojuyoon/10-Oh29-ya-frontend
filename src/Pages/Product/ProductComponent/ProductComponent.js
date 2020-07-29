import React from "react";
// import "./.scss";

class ProductComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="mainContainerCategory 밑에 컴포넌트들">
          <ul>
            <li>
              <div>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div>
                <div></div>
                <div className="heart"></div>
              </div>
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductComponent;
