import React from 'react';
 
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { UseForm, Form } from '../models/UseForm';

import Scheduler from 'devextreme-react/scheduler';
 
const data = [{
    text: "Website Re-Design Plan",
    startDate: new Date(2016, 4, 25, 9, 30),
    endDate: new Date(2016, 4, 25, 11, 30),
    description: "Testing"
}, {
    text: "Website Re-Design Plan",
    startDate: new Date(2016, 4, 25, 9, 30),
    endDate: new Date(2016, 4, 25, 11, 30)
}
,{
    text: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2016, 4, 25, 12, 0),
    endDate: new Date(2016, 4, 25, 13, 0)
}, 
// ...
];
 
class CalendarForm extends React.Component {
    render() {
        return (
            <Form title="Calendar">
            <Scheduler
                dataSource={data}
                defaultCurrentDate={new Date(2016, 4, 25)} 
                />

            </Form>
        );
    }
}
export default CalendarForm;