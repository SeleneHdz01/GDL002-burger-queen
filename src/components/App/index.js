import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../Home';
import KitchenPage from '../Kitchen';
import OrderPage from '../Order';
import SentPage from '../Sent';
import Navigation from '../Navigation';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation /> <hr />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.KITCHEN} component={KitchenPage} />
      <Route path={ROUTES.ORDER} component={OrderPage} />
      <Route path={ROUTES.SENT} component={SentPage} />
     
    </div>
  </Router>
);
export default App;