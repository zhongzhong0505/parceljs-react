import React from 'react';
import ReactDOM  from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OneComponent from './src/components/OneComponent';
import TwoComponent from './src/components/TwoComponent';
import ThreeComponent from './src/components/ThreeComponent';

class App extends React.Component {
  render() {

    return <div>
      <Router>
        <div>
          <Link to={'/one'} style={{marginRight: 20}}>One</Link>
          <Link to={'/two'} style={{marginRight: 20}}>Two</Link>
          <Link to={'/three'} style={{marginRight: 20}}>Three</Link>
          <Route path="/one" component={OneComponent}></Route>
          <Route path="/two" component={TwoComponent}></Route>
          <Route path="/three" component={ThreeComponent}></Route>
        </div>
      </Router>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))

if (module.hot) {
  module.hot.accept();
}

