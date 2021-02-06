import React, { useState, useEffect } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { UseForm, Form } from '../models/UseForm';
import DateFnsUtils from '@date-io/date-fns';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ScheduledToday from './ScheduledToday';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios";
import CaasData from '../contents/sp-registration.json'

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

  const classes = useStyles();
  const { values, setValues, handleInputChange } = UseForm(initData);

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [credential, setCredential] = useState([]);
  const handleChange = (event) => {
    setCredential(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setCredential(value);
  };

  const handleSubmitForm = (event) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', values)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    console.log(values);
  }

  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  // const MenuProps = {
  //   PaperProps: {
  //     style: {
  //       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //       width: 250,
  //     },
  //   },
  // };


  // const { values, setValues, handleInputChange } = UseForm(initData);

  // const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));


  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  // const classes = useStyles();

  return (
    <div style={{ margin: '5%' }}>
      <Form title="Appointment Form" onSubmit={handleSubmitForm}>
        <Grid containerspacing={5}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              name="clientName"
              value={values.clientName}
              style={{ width: 300 }}
              onChange={handleInputChange}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              name="clientName"
              value={values.clientName}
              style={{ width: 300 }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Autocomplete
              id="mui-theme-provider-outlined-input"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Service Providers" variant="outlined" />}
            />
          </Grid>

          <Grid item xs={7}>
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
          {/* <Grid item xs={3}>
          <br ></br>
          <Button variant="contained" color="primary">
            Create
            </Button>
        </Grid> */}
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
              <Button variant="contained" color="primary">
                Create
            </Button>
            </div>
          </Grid>

        </Grid>
      </Form>
    </div>
  )
}

