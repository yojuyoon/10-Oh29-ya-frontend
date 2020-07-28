import React from "react";
import { withRouter } from "react-router-dom";
import DetailItem from "../../Components/DetailItem/DetailItem";
import "./DetailProduct.scss";

class DetailProduct extends React.Component {
  state = {
    title: "",
    data: [],
  };

  componentDidMount = () => {
    fetch("http://10.58.4.24:8000/product/specialorders", {
      method: "GET",
      header: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data.map((data) => {
            return {
              ...data,
            };
          }),
        });
      });
  };

  render() {
    return (
      <>
        <div className="detailCategory"></div>
        <header className="header">
          <div className="blackContainer">
            <div className="titleContainer">
              <h1 className="title">Special-Order</h1>
              <p className="content">
                뉴트로 스타일로 돌아온 오비라거 랄라베어
              </p>
            </div>
          </div>
        </header>
        <DetailItem />
      </>
    );
  }
}

export default withRouter(DetailProduct);
