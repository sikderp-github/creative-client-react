import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddService from './Components/AdminPages/AddService/AddService';
import Admin from './Components/AdminPages/Admin/Admin';
import AllServices from './Components/AdminPages/AllServices/AllServices';
import PlaceOrder from './Components/CustomersPages/PlaceOrder/PlaceOrder';
import ServiceReview from './Components/CustomersPages/ServiceReview/ServiceReview';
import ServiceStatus from './Components/CustomersPages/ServiceStatus/ServiceStatus';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allbookings, setAllbookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/allbookings')
      .then(res => res.json())
      .then(data => setAllbookings(data))
  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, allbookings, setAllbookings]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/orders" component={PlaceOrder} />
          <Route path="/customerstatus" component={ServiceStatus} />
          <Route path="/review" component={ServiceReview} />
          <Route path="/addService" component={AddService} />
          <Route path="/admin" component={Admin} />
          <Route path="/allServices" component={AllServices} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;