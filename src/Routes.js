import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
import JoinEmail from "./Pages/Join/JoinEmail";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import Men from "./Pages/Men/Men";
import Women from "./Pages//Women/Women";
import ProductList from "./Pages/ProductList/ProductList";
import DetailProduct from "./Pages/DetailProduct/DetailProduct";
import DetailItem from "./Components/DetailItem/DetailItem";
import Footer from "./Components/Footer/Footer";
import TwentyNineTV from "./Pages/TwentyNineTV/TwentyNineTV";
import Nav from "./Components/AlternatingNav/Nav/Nav";
import HeaderNav from "./Components/AlternatingNav/HeaderNav/HeaderNav";
import AlternatingNav from "./Components/AlternatingNav/AlternatingNav";
import MyHeart from "./Pages/MyHeart/MyHeart";
import SpecialOrder from "./Pages/SpecialOrder/SpecialOrder";
import SpecialContent from "./Components/SpecialContent/SpecialContent";
import "./Styles/reset.scss";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <AlternatingNav />
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/JoinEmail" component={JoinEmail} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/Product/Men" component={Men} />
          <Route exact path="/Product/Women" component={Women} />
          <Route exact path="/ProductList" component={ProductList} />
          <Route
            exact
            path="/ProductList/:category/:subcategory"
            component={ProductList}
          />
          <Route exact path="/TwentyNineTV" component={TwentyNineTV} />
          <Route exact path="/Footer" component={Footer} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/HeaderNav" component={HeaderNav} />
          <Route exact path="/DetailProduct/:id" component={DetailProduct} />
          <Route exact path="/DetailItem" component={DetailItem} />
          <Route exact path="/AlternatingNav" component={AlternatingNav} />
          <Route exact path="/MyHeart" component={MyHeart} />
          <Route exact path="/SpecialOrder" component={SpecialOrder} />
          <Route exact path="/SpecialContent" component={SpecialContent} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
