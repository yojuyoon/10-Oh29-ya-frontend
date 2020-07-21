import React from "react";
import { withRouter } from "react-router-dom";
import TwentyNineTVFeedComponent from "./TwentyNineTVFeedComponent";
import "./TwentyNineTV.scss";
import "../../Styles/common.scss";

class TwentyNineTV extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };

  // getIndex = (index) => {
  //   this.setState(index);
  // };

  render() {
    return (
      <div className="TwentyNineTVFeed">
        {this.state.data.map((feed, index) => {
          return (
            <TwentyNineTVFeedComponent
              img={feed.imageUrl}
              logo={feed.logo}
              brandName={feed.id}
              text={feed.text}
              index={index}
              // getIndex={this.getIndex}
            />
          );
        })}
      </div>
    );
  }
}
export default withRouter(TwentyNineTV);
