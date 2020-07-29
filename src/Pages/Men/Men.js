import React from "react";
import "./Men.scss";
import "../../Styles/reset.scss";
import { withRouter } from "react-router-dom";
import MainWrap from "./MainWrap/MainWrap";

class Men extends React.Component {
  render() {
    return (
      <div className="Men">
        <MainWrap />
        <div className="rightBtnTopEnd"></div>
      </div>
    );
  }
}
export default withRouter(Men);
