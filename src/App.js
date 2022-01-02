import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/homePage/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgetPassword";
import Dashboard from "./views/dashboard/Dashboard";
import DashboardContent from "./views/dashboard/DashboardContent";
import NewBooking from "./views/dashboard/NewBooking";
import BookingStatus from "./views/dashboard/BookingStatus";
import DonationDetails from "./views/dashboard/DonationDetails";
import Transitions from "./views/dashboard/Transitions";
import NewDonations from "./views/dashboard/DonationDetails";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route
            exact
            path="/dashboard-content"
            component={DashboardContent}
          ></Route>
          <Route exact path="/new-booking" component={NewBooking}></Route>
          <Route exact path="/booking-status" component={BookingStatus}></Route>
          <Route
            exact
            path="/donation-details"
            component={DonationDetails}
          ></Route>
          <Route exact path="/new-donations" component={NewDonations}></Route>
          <Route exact path="/transitions" component={Transitions}></Route>
          <Route
            exact
            path="/forgot-password"
            component={ForgotPassword}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
