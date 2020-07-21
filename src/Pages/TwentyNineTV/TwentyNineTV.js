import React from "react";
import { withRouter } from "react-router-dom";
import TwentyNineTVFeedComponent from "./TwentyNineTVFeedComponent";
import FeedModal from "./FeedModal";
import "./TwentyNineTV.scss";
import "../../Styles/common.scss";

class TwentyNineTV extends React.Component {
  render() {
    return (
      <>
        <FeedModal />
        <div className="TwentyNineTVFeed">
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/20/adad1927a3c3498790fdad238f6ca695_20200720154143.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="29CM_beauty"
          />
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/20/a611513c0fea4d37a01b089e410a2983_20200720173607.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="로서울"
          />
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/20/0260489a158c48139a3960ebdbddb338_20200720182911.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="bakerstarlet"
          />
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/19/9f4424171cbf4a8799ad4fc8eee44a44_20200719224632.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="마지언타이틀"
          />
        </div>
        <div className="TwentyNineTVFeed">
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/19/9f4424171cbf4a8799ad4fc8eee44a44_20200719224632.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="nimo"
          />
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/19/7258dc7901a44fa6b709760f09750948_20200719225430.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="29CM_beauty"
          />
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/20/8ed14854d88644d0a035f1235fb21776_20200720141905.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="메리모티브"
          />
          <TwentyNineTVFeedComponent
            img="https://img.29cm.co.kr/tvfeed/2020/07/20/adad1927a3c3498790fdad238f6ca695_20200720154143.jpeg"
            logo="https://img.29cm.co.kr/media/profile/2020/04/10/343afabc8826446f9c735fc3a2ef5fd6_20200410132631.jpg"
            brandName="Mat and Mell"
          />
        </div>
      </>
    );
  }
}
export default withRouter(TwentyNineTV);
