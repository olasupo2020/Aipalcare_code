import React, { Component } from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";
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


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact from={RouteConstants.HOME} render={props => <NavigationComponent {...props} />} />
                    <Route exact path={RouteConstants.DAILYSIC} render={props => <DailySchedules {...props} />} />
                    <Route exact path={RouteConstants.SCHEDULE} render={props => <ScheduleAptForm {...props} />} />
                    <Route exact path={RouteConstants.REG} render={props => <OrgRegForm {...props} />} />
                    <Route exact path={RouteConstants.REGIS} render={props => <ServiceProviderForm {...props} />} />
                    <Route exact path={RouteConstants.NOTESPANEL} render={props => <SessionNotesPanel {...props} />} />
                    <Route exact path={RouteConstants.CALENDAR} render={props => <CalendarForm {...props} />} />
                    <Route exact path={RouteConstants.SESSION} render={props => <SessionNotesForm {...props} />} />
                    <Route exact path={RouteConstants.CLIENT_FORM} render={props => <ClientForm {...props} />} />
                    <Route exact path={RouteConstants.DASHBOARD} component={Dashboard} />
                    <Route exact path={RouteConstants.FORMWRAP} component={MedicalFormWrap} />
                    <Route exact path={RouteConstants.PROFILE} component={Profile} />
                    <Route exact path={RouteConstants.DASHB} component={Clients} />
                    <Route exact path={RouteConstants.LOCATION} component={Locations} />
                    <Route exact path={RouteConstants.NEW} component={NewPatient} />
                    <Route exact path={RouteConstants.SERVICE} component={ServiceProviders} />
                    <Route exact path={RouteConstants.BILLING} component={Billing} />
                    <Route exact path={RouteConstants.DASH} component={AlliedHealthcare} />
                    <Route exact path={RouteConstants.NOTIFY} component={Notifications} />


                </Switch>
            </div>
        )
    }
}
