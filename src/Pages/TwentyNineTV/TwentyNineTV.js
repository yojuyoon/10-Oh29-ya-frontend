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
    };
  }

  componentDidMount = () => {
    fetch(`http://${API_URL}/media/recommend`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };

  handleIcon = (clickedId, option) => {
    this.setState({
      data: this.state.data.map((feed) => {
        if (feed.post_id === clickedId) {
          return {
            ...feed,
            ...option,
          };
        }
        return feed;
      }),
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
      handleIcon,
    } = this;
    const { modalStatus, data, currentIdx } = this.state;
    return (
      <>
        <div className="TwentyNineTVFeed">
          {data.map((feed, index) => {
            return (
              <TwentyNineTVFeedComponent
                onClick={() => {
                  showModal();
                  setModalIdx(index);
                }}
                feed={feed}
                key={index}
                handleIcon={this.handleIcon}
              />
            );
          })}
          {modalStatus && (
            <FeedModal
              handleIcon={handleIcon}
              hideModal={hideModal}
              data={data[currentIdx]}
              idxNextHandler={
                currentIdx === data.length - 1
                  ? !idxNextHandler
                  : idxNextHandler
              }
              idxPrevHandler={currentIdx > 0 && idxPrevHandler}
            />
          )}
        </div>
        <div className="moreBtnContainer">
          <button className="moreBtn">더보기 ▾</button>
        </div>
      </>
    );
  }
}
export default withRouter(TwentyNineTV);
