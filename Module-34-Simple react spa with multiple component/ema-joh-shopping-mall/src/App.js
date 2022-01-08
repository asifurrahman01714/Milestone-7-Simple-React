import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/about">
            <Shop />
          </Route>
          
          <Route exact path="/">
            <Shop />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
