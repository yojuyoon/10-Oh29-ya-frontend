import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Login/Join";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import TwentyNineTV from "./Pages/TwentyNineTV/TwentyNineTV";
import Nav from "./Components/AlternatingNav/Nav/Nav";
import HeaderNav from "./Components/AlternatingNav/HeaderNav/HeaderNav";
import AlternatingNav from "./Components/AlternatingNav/AlternatingNav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/TwentyNineTV" component={TwentyNineTV} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/HeaderNav" component={HeaderNav} />
          <Route exact path="/AlternatingNav" component={AlternatingNav} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
