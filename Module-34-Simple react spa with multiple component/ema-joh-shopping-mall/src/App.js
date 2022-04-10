import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Review from "./components/Review/Review";
import Login from "./components/Login/Login";
import Shipment from "./components/Shipment/Shipment";
import Inventory from "./components/Inventory/Inventory";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/inventory">
            <Inventory />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/shipment">
            <Shipment />
          </Route>


          <Route path="/product/:productId"> {/* This productId is dynamically passed through ProductDetails component */}
            <ProductDetails/>
          </Route>

          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
