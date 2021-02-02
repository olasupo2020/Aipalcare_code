import React, { useState, useEffect } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { UseForm, Form } from '../Models/UseForm';
import DateFnsUtils from '@date-io/date-fns';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ScheduledToday from './ScheduledToday';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const initData = {
  clientId: 1,
  clientName: "",
  serviceProvider: "Jones",
  date: "Sept. 12, 2020",
  time: "11:00am",
  scheduler: "FrontDesk",
  location: "Wayne",
  todayDate: new Date(),
  isPermanent: false
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }

];


export default function ScheduleAptForm() {

  const { values, setValues, handleInputChange } = UseForm(initData);

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();

  return (
 
    
      <Form title="Appointment Form">
        <Grid container>
          <Grid item xs={4}>
            <TextField
              label="First Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              name="clientName"
              value={values.clientName}
              style={{ width: 400 }}
              onChange={handleInputChange}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              name="clientName"
              value={values.clientName}
              style={{ width: 400 }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              id="mui-theme-provider-outlined-input"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 400 }}
              renderInput={(params) => <TextField {...params} label="Service Providers" variant="outlined" />}
            />
          </Grid>

          <Grid item xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Appointement Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Appointment Time"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />

              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={2}>
            <br />
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Grid>
          <Grid item xs={8} style={{ padding: '5%' }}>

            <h4>Today's Schedules</h4>
            <ScheduledToday />

            <br></br>
            <div className={classes.root}>
            <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" color="primary" startIcon={<EditIcon />} >
         Edit
            </Button>
            </div>
          </Grid>

        </Grid>
      </Form>
  
  )
}
