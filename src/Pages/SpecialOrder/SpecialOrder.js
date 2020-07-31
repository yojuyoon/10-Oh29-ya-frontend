import React from "react";
import { withRouter } from "react-router-dom";
import SpecialContent from "../../Components/SpecialContent/SpecialContent";
import "./SpecialOrder.scss";

class SpecialOrder extends React.Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    fetch("http://3.17.144.255:8000/product/specialorders", {
      method: "GET",
      header: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
    const { data } = this.state;

    return (
      <div className="SpecialOrder">
        <ul className="itemContainer">
          {data.map((data, index) => (
            <SpecialContent key={data.product_id} content={data} />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(SpecialOrder);
