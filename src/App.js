import React from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Order from './components/Order';
import ViewOrders from './components/View-Orders';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  state = { orders: [] }

  render = () =>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/view-order">
            <ViewOrders orders={this.state.orders} />
          </Route>
          <Route path="/order">
            <Order handleSubmitOrder={orders => this.setState({ orders })} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
}

export default App;
