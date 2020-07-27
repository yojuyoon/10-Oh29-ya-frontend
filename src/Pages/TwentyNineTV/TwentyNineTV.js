import React from "react";
import { withRouter } from "react-router-dom";
import TwentyNineTVFeedComponent from "./TwentyNineTVFeedComponent";
import FeedModal from "./FeedModal";
import API_URL from "../../config";
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
      heart: false,
      icon: (
        <svg fill="#5D5D5D" height="24" viewBox="0 0 48 48" width="24">
          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
        </svg>
      ),
      likeNumber: 0,
    };
  }

  componentDidMount = () => {
    fetch(`http://${API_URL}/media/recommend`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data.map((feed) => {
            return {
              ...feed,
            };
          }),
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
    const {
      showModal,
      hideModal,
      setModalIdx,
      idxNextHandler,
      idxPrevHandler,
    } = this;
    const { modalStatus, data, currentIdx } = this.state;
    return (
      <div className="TwentyNineTVFeed">
        {this.state.data.map((feed, index) => {
          return (
            <TwentyNineTVFeedComponent
              onClick={() => {
                showModal();
                setModalIdx(index);
              }}
              postId={feed.id}
              img={feed.thumbnail_image}
              logo={feed.staff_logo}
              brandName={feed.staff_name}
              text={feed.content}
              officialCheck={feed.official_check}
              likedNumber={feed.like_num}
              hashtag={feed.hashtag}
              key={index}
            />
          );
        })}
        {modalStatus && (
          <FeedModal
            hideModal={hideModal}
            data={data[currentIdx]}
            idxNextHandler={
              currentIdx === 29 ? !idxNextHandler : idxNextHandler
            }
            idxPrevHandler={currentIdx > 0 && idxPrevHandler}
            likedNumber={this.props.likedNumber}
            postId={this.props.postId}
          />
        )}
      </div>
    );
  }
}
export default withRouter(TwentyNineTV);
