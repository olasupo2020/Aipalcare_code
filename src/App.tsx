//import logo from './images/logos/png10.png';
import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './App.css';
import { MedicalFormWrap } from "./forms/clients/MedicalFormWrap";
import Dashboard from "./Dashboard";
import NavigationComponent from './dashboard/NavigationComponent';
import DailySchedules from './forms/DailySchedules';
import ScheduleAptForm from './forms/ScheduleAptForm';
import OrgRegForm from './forms/OrgRegForm';
import ServiceProviderForm from './forms/ServiceProviderForm';
import SessionNotesPanel from './forms/SessionNotesPanel';
import CalendarForm from './forms/CalendarForm';
import SessionNotesForm from './forms/SessionNotesForm';
import { RouteConstants } from './constants/CommonConstants';
import Profile from './forms/Profile';
import Clients from './forms/Clients';
import Locations from './forms/Locations';
import NewPatient from './forms/NewPatient';
import ServiceProviders from './forms/ServiceProviders';
import Billing from './forms/Billing';
import AlliedHealthcare from './forms/AlliedHealthcare';
import Notifications from './forms/Notifications';
import ClientForm from './forms/clients/ClientForm';
import { AuthProvider } from './auth/AuthContext';
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import Signup from "./auth/Signup";
//import Amplify from 'aws-amplify';
//import awsconfig from './aws-exports';
//import Routes from './Routes';

//import { withAuthenticator } from '@aws-amplify/ui-react';

//Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">

      {/* <AmplifySignOut /> */}
      {/* 
      <Routes /> */}

      <AuthProvider>
        <Switch>
          <PrivateRoute exact from={RouteConstants.HOME} component={NavigationComponent} />
          <PrivateRoute exact path={RouteConstants.DAILYSIC} component={DailySchedules} />
          <PrivateRoute exact path={RouteConstants.SCHEDULE} component={ScheduleAptForm} />
          <PrivateRoute exact path={RouteConstants.REG} component={OrgRegForm} />
          <PrivateRoute exact path={RouteConstants.REGIS} component={ServiceProviderForm} />
          <PrivateRoute exact path={RouteConstants.NOTESPANEL} component={SessionNotesPanel} />
          <PrivateRoute exact path={RouteConstants.CALENDAR} component={CalendarForm} />
          <PrivateRoute exact path={RouteConstants.SESSION} component={SessionNotesForm} />
          <PrivateRoute exact path={RouteConstants.CLIENT_FORM} component={ClientForm} />
          <PrivateRoute exact path={RouteConstants.DASHBOARD} component={Dashboard} />
          <PrivateRoute exact path={RouteConstants.FORMWRAP} component={MedicalFormWrap} />
          <PrivateRoute exact path={RouteConstants.PROFILE} component={Profile} />
          <PrivateRoute exact path={RouteConstants.DASHB} component={Clients} />
          <PrivateRoute exact path={RouteConstants.LOCATION} component={Locations} />
          <PrivateRoute exact path={RouteConstants.NEW} component={NewPatient} />
          <PrivateRoute exact path={RouteConstants.SERVICE} component={ServiceProviders} />
          <PrivateRoute exact path={RouteConstants.BILLING} component={Billing} />
          <PrivateRoute exact path={RouteConstants.DASH} component={AlliedHealthcare} />
          <PrivateRoute exact path={RouteConstants.NOTIFY} component={Notifications} />
          <Route path={RouteConstants.SIGN_UP} component={Signup} />
          <Route path={RouteConstants.LOGIN} component={Login} />
          <Route path={RouteConstants.FORGOT_PASSWORD} component={ForgotPassword} />
          {/* <Route exact path='/updateprofile' component={UpdateProfile} /> */}
        </Switch>
      </AuthProvider>
    </div>
  );
}

//export default withAuthenticator(App);
export default App;
