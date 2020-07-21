import React from "react";
import { withRouter } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import Nav from "./Nav/Nav";

class AlternatingNav extends React.Component {
  state = {
    scrollPosition: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      scrollPosition: scrolled,
    });
  };
  render() {
    const { scrollPosition } = this.state;
    return <>{scrollPosition >= 0.087 ? <Nav /> : <HeaderNav />}</>;
  }
}

export default withRouter(AlternatingNav);
