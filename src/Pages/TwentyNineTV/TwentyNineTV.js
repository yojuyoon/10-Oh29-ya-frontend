import React from "react";
import { withRouter } from "react-router-dom";
import TwentyNineTVFeedComponent from "./TwentyNineTVFeedComponent";
import FeedModal from "./FeedModal";
import "./TwentyNineTV.scss";
import "../../Styles/common.scss";

class TwentyNineTV extends React.Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      data: [],
      currentModalData: [],
      currentIdx: 0,
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.7.162:8000/media/recommend")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };

  showModal = () => {
    this.setState({
      modalStatus: true,
      currentModalData: this.state.currentModalData,
    });
    document.body.style.overflow = "hidden";
  };

  hideModal = () => {
    this.setState({ modalStatus: false });
    document.body.style.overflow = "unset";
  };

  idxNextHandler = () => {
    this.setState({ currentIdx: this.state.currentIdx + 1 });
  };

  idxPrevHandler = () => {
    this.setState({ currentIdx: this.state.currentIdx - 1 });
  };

  setModalIdx = (idx) => {
    this.setState({ currentIdx: idx });
  };

  render() {
    console.log(this.state.data[this.state.currentIdx]);
    const { showModal, hideModal } = this;
    const { modalStatus } = this.state;
    return (
      <div className="TwentyNineTVFeed">
        {this.state.data.map((feed, index) => {
          return (
            <TwentyNineTVFeedComponent
              onClick={() => {
                console.log("dddd");
                showModal({
                  img: feed.thumbnail_img,
                  logo: feed.staff_logo,
                  brandName: feed.staff_name,
                  text: feed.content,
                  officialCheck: feed.official_check,
                  hashtag: feed.hashtag,
                  key: index,
                });
                this.setModalIdx(index);
              }}
              img={feed.thumbnail_img}
              logo={feed.staff_logo}
              brandName={feed.staff_name}
              text={feed.content}
              officialCheck={feed.official_check}
              hashtag={feed.hashtag}
              key={index}
            />
          );
        })}
        {modalStatus && (
          <FeedModal
            hideModal={hideModal}
            data={this.state.data[this.state.currentIdx]}
            idxNextHandler={this.idxNextHandler}
            idxPrevHandler={this.idxPrevHandler}
          />
        )}
      </div>
    );
  }
}
export default withRouter(TwentyNineTV);
