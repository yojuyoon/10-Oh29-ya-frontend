import React from "react";
import Men from "./Men/Men";
import Women from "./Women/Women";
// import "./.scss";

class Product extends React.Component {
  render() {
    const category = this.props.match.params.id;

    return <div>{category === "MEN" ? <Men /> : <Women />}</div>;
  }
}

export default Product;
