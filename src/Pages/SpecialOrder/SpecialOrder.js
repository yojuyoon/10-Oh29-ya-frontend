import React from "react";
import { withRouter } from "react-router-dom";
import { itemList } from "./itemListData";
import SpecialContent from "../../Components/SpecialContent/SpecialContent";
import "./SpecialOrder.scss";

class SpecialOrder extends React.Component {
  // state = {
  //   dDay: 0,
  // };

  render() {
    // const { dDay } = this.state;
    // const { digitCheck } = this;

    return (
      <div className="SpecialOrder">
        <ul className="itemContainer">
          {itemList.item.map((content, index) => (
            <SpecialContent key={index} content={content} />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(SpecialOrder);
