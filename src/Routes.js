import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
<<<<<<< HEAD
import TwonineTV from "./Pages/TwonineTV/TwonineTV";
import Specialorder from "./Pages/SpecialOrder/SpecialOrder";
=======
import TwentyNineTV from "./Pages/TwentyNineTV/TwentyNineTV";
import Nav from "./Components/AlternatingNav/Nav/Nav";
import HeaderNav from "./Components/AlternatingNav/HeaderNav/HeaderNav";
import AlternatingNav from "./Components/AlternatingNav/AlternatingNav";
>>>>>>> master

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Join" component={Join} />
          <Route exact path="/Product" component={Product} />
<<<<<<< HEAD
          <Route exact path="/TwonineTV" component={TwonineTV} />
          <Route exact path="/Specialorder" component={Specialorder} />
=======
          <Route exact path="/TwentyNineTV" component={TwentyNineTV} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/HeaderNav" component={HeaderNav} />
          <Route exact path="/AlternatingNav" component={AlternatingNav} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}
export default Routes;
