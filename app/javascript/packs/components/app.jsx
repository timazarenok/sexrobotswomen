import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import Whatwedo from "./whatwedo";
import Footer from "./footer";
import Main from "./main";
import Whatweare from "./whatweare";
import Contacts from "./contacts";
import Blog from "./blog";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/what-we-do" component={Whatwedo} />
        <Route exact path="/who-we-are" component={Whatweare} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contacts} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
