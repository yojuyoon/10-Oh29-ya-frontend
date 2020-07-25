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
      clickedIcon: false,
      clickedNumber: this.likedNumber,
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.1.157:8000/media/recommend")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data.map((feed) => {
            return {
              ...feed,
              likedNumber: 7,
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

  // activeIcon = () => {
  //   this.setState({
  //     clickedIcon: true,
  //     clickedNumber: this.state.clickedNumber + 1,
  //   });
  // };

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
              img={feed.thumbnail_image}
              logo={feed.staff_logo}
              brandName={feed.staff_name}
              text={feed.content}
              officialCheck={feed.official_check}
              hashtag={feed.hashtag}
              likedNumber={feed.likedNumber}
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
          />
        )}
      </div>
    );
  }
}
export default withRouter(TwentyNineTV);
