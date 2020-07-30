import React from "react";
import { withRouter } from "react-router-dom";
import TwentyNineTVComponent from "../TwentyNineTV/TwentyNineTVFeedComponent";
import "./FavListTwoNine.scss";

class FavListTwoNineTV extends React.Component {
  render() {
    console.log("data>>>", this.props.data);
    return (
      <div className="FavListTwoNineTV">
        {this.props.data.map((feed) => {
          return <TwentyNineTVComponent feed={feed} />;
        })}
      </div>
    );
  }
}

export default withRouter(FavListTwoNineTV);
