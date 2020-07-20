import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Login/Join";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import TwoNineTV from "./Pages/TwoNineTV/TwoNineTV";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/Product" component={Product} />
          <Route exact path="/TwoNineTV" component={TwoNineTV} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
