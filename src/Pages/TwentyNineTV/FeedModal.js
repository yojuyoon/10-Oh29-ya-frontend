import React from "react";
import SnsModal from "./SnsModal";
import "./FeedModal.scss";

class FeedModal extends React.Component {
  constructor() {
    super();
    this.state = {
      shareModal: false,
    };
  }

  showReport = () => {
    this.setState({
      shareModal: true,
    });
  };

  hideReport = () => {
    this.setState({
      shareModal: false,
    });
  };

  render() {
    const { showReport, hideReport } = this;
    const { hideModal, img, logo, brandName, text } = this.props;
    return (
      <div className="FeedModal">
        {this.state.shareModal && <SnsModal hideReport={hideReport} />};
        <div className="leftBtn"></div>
        <div className="ModalContentContainer">
          <button onClick={hideModal} className="closeBtn">
            <img
              alt="closeBtn"
              src="https://img.29cm.co.kr/next29cm/media/btn_viewer.png"
            />
          </button>
          <div className="ModalContentImg">
            <img alt="contentImg" className="contentImg" src={img} />
          </div>
          <div className="progressBar"></div>
          <div className="rightContents">
            <div className="profile">
              <div className="info">
                <div className="logo">
                  <img alt="profileLogo" className="profileLogo" src={logo} />
                </div>
                <div className="profileName">
                  <span className="brandName">{brandName}</span>
                  <span className="brandOfficial">Official</span>
                </div>
              </div>
              <div className="moreBtn">•••</div>
            </div>
            <div className="contents">
              <div className="text">{text}</div>
              <div className="tag">
                <span>#노엘 </span>
                <span>#노엘스몰 </span>
                <span>#버킷백 </span>
                <span>#데일리백 </span>
                <span>#숄더백 </span>
                <span>#크로스백 </span>
                <span>#토트백 </span>
                <span>#바이커스탈렛 </span>
              </div>
            </div>
            <div className="icons">
              <div className="favIcon">
                <i class="far fa-heart">
                  <span className="number">1</span>
                </i>
              </div>
              <div onClick={showReport} className="shareIcon">
                <i class="fas fa-share-alt" />
              </div>
            </div>
            <div className="productContainer">
              <div className="titleContainer">
                <span className="title">관련 상품 및 브랜드</span>
                <div className="sideBtn">
                  <button className="left">
                    <i class="fas fa-chevron-left" />
                  </button>
                  <button className="right">
                    <i class="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
              <div className="productImage">
                <div className="product">
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                  <img
                    alt="product"
                    className="product"
                    src="https://img.29cm.co.kr/next-brand/2018/04/27/05e31d8d1ae1439888a0219cc25290ef_20180427184037.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightBtn"></div>
      </div>
    );
  }
}

export default FeedModal;
