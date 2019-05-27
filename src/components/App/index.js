import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import HomePage from "../Home";
import KitchenPage from "../Kitchen";
import OrderPage from "../Order";
import Navigation from "../Navigation";

const App = () => (
  <Router>
    <div>
      {/* Llamando a mi componente Navigation coomo <Navigation /> */}
      <Navigation />
      <Route exact path="/" component={HomePage} />
      <Route path="/kitchen" component={KitchenPage} />
      <Route path="/order" component={OrderPage} />
    </div>
  </Router>
);
export default App;
