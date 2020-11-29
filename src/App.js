import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRouter from "./components/privateRouter/Index";
import Index from "./views/index/Index";
import Login from "./views/login/Index";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRouter path="/index" component={Index} />
        </Switch>
      </Router>
    );
  }
}

export default App;
