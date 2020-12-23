import React, { Component } from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import FormWrap from "./FormWrap";
import Dashboard from "./Dashboard";
import NavigationComponent from './dashboard/NavigationComponent';
import DailySchedules from './forms/DailySchedules';
import ScheduleAptForm from './forms/ScheduleAptForm';
import OrgRegForm from './forms/OrgRegForm';
import ServiceProviderForm from './forms/ServiceProviderForm';
import SessionNotesPanel from './forms/SessionNotesPanel';
import CalendarForm from './forms/CalendarForm';
import SessionNotesForm from './forms/SessionNotesForm';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact from='/home' render={props => <NavigationComponent {...props} />} />
                    <Route exact path='/dailyschs' render={props => <DailySchedules {...props} />} />
                    <Route exact path='/schedule' render={props => <ScheduleAptForm {...props} />} />
                    <Route exact path='/reg-org' render={props => <OrgRegForm {...props} />} />
                    <Route exact path='/reg-sp' render={props => <ServiceProviderForm {...props} />} />
                    <Route exact path='/notespanel' render={props => <SessionNotesPanel {...props} />} />
                    <Route exact path='/calendar' render={props => <CalendarForm {...props} />} />
                    <Route exact path='/session-notes' render={props => <SessionNotesForm {...props} />} />
                    <Route exact path='/dashboard' component={Dashboard} />
                    <Route exact path='/formwrap' component={FormWrap} />
                </Switch>
            </div>
        )
    }
}
