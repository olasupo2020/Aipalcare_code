import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { UseForm, Form } from '../models/UseForm';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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


export default function OrgRegForm() {
  const classes = useStyles();
  const { values, setValues, handleInputChange } = UseForm(initData);

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <Form title="Organization Registration Form">
      <Grid container>
        <Grid item xs={12}>
          
          <TextField
            label="Company Legal Name"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          <TextField
            label="License Number"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          <TextField
            label="National Health Provider Number"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />

        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Primary Rep. First Name"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          <TextField
            label="Primary Rep. Last Name"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
            <TextField
            label="Governing Body"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          
        </Grid>
        <Grid item xs={12}>
            <br />
            <div className={classes.root}>
            <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />}>
              Save
            </Button>
            <Button variant="contained" color="primary" startIcon={<EditIcon />} >
              Edit
            </Button>
            </div>
          </Grid>
       
      
      </Grid>
    </Form>
  );
}
