import React from "react";
import { withRouter } from "react-router-dom";
// import { ip } from "./../Login/ip";
import DetailItem from "../../Components/DetailItem/DetailItem";
import "./DetailProduct.scss";

class DetailProduct extends React.Component {
  state = {
    title: "",
    data: [],
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <div className="detailCategory" />
        {/* 백엔드에서 데이터 못받아온 부분 주석처리 */}
        {/* <header className="header">
          <div className="blackContainer">
            <div className="titleContainer">
              <h1 className="title">Special-Order</h1>
              <p className="content">
                뉴트로 스타일로 돌아온 오비라거 랄라베어
              </p>
            </div>
          </div>
        </header> */}
        <DetailItem key={data.product_id} content={data} />
      </>
    );
  }
}

export default withRouter(DetailProduct);
