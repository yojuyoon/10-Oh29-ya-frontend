import React from "react";
import "./Women.scss";
import "../../Styles/reset.scss";
import { withRouter } from "react-router-dom";
import MainWrap from "./MainWrap/MainWrap";

class Women extends React.Component {
  render() {
    return (
      <div className="Women">
        <MainWrap />
        <div className="rightBtnTopEnd"></div>
      </div>
    );
  }
}
export default withRouter(Women);
