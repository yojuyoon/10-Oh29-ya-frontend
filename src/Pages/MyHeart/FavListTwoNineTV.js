import React from "react";
import { withRouter } from "react-router-dom";
import TwentyNineTVComponent from "../TwentyNineTV/TwentyNineTVFeedComponent";
import "./FavListTwoNine.scss";

class FavListTwoNineTV extends React.Component {
  state = {
    favTwentyNineList: this.props.data,
    modalStatus: false,
  };

  render() {
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
