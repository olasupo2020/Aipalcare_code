import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  TextField, Grid, Button, Select, InputLabel, Input, MenuItem, Checkbox, FormControl
  , ListItemText
} from '@material-ui/core';
import { UseForm, Form } from '../models/UseForm';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';
import CaasData from '../contents/sp-registration.json';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  invalid_input: {
    color: "red"
  }
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
  isPermanent: false,
  phoneNo: "234590009900"
}

const names = [
  'Speech Language Pathologist',
  'Occupational Therapist',
  'Physical Therapist',

];




export default function ServiceProviderForm() {
  const classes = useStyles();
  const { values, setValues, handleInputChange } = UseForm(initData);

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const currentDate = initData.todayDate;

  // const [errorMessage, setErrorMessage] = useState('');
  // const [error, setError] = useState(false);

  // const currentDate = initData.todayDate;



  const handleDateChange = (date) => {
    if (date > currentDate) {
      setErrorMessage("Invalid Date");
      setSelectedDate(date);
      setError(true);
    } else {
      setSelectedDate(date);
      setErrorMessage("");
      setError(false);
    }
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
    if (!error) {
      values.phoneNo = "234900294940903";
      axios.post('https://g9v0892kab.execute-api.us-east-2.amazonaws.com/v1/clinician', values)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      console.log("the post data");
      console.log(values);
      console.log("end of post data");
    }
    else {
      console.log("There is error in your input");
    }
  }



  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };



  return (
    <Form title={CaasData.formTitle} onSubmit={handleSubmitForm}>
      <Grid container spacing={3}>
        <Grid item xs={12} >

          <TextField
            label={CaasData.firstName}

            id="mui-theme-provider-standard-input"
            name="firstName"
            value={values.firstName}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            label={CaasData.lastName}

            id="mui-theme-provider-outlined-input"
            name="lastName"
            value={values.lastName}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} >
          <FormControl style={{ width: '100%', margin: '0 20%' }} >
            <InputLabel id="demo-mutiple-name-label">Select</InputLabel>
            <Select

              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
              input={<Input />}
              style={{ width: '60%' }}

            >
              {names.map((name) => (
                <MenuItem key={name} value={name} >
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12} >
          <TextField
            label={CaasData.nhpn}
            id="mui-theme-provider-outlined-input"
            name="nhpn"
            value={values.nhpn}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label={CaasData.licenseNo}
            id="mui-theme-provider-outlined-input"
            name="licenseNo"
            value={values.licenseNo}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          /></Grid>

        <Grid item xs={12} >
          <TextField
            label={CaasData.govtBody}
            id="mui-theme-provider-outlined-input"
            name="govtBody"
            value={values.govtBody}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            label={CaasData.credential}
            id="mui-theme-provider-outlined-input"
            name="credential"
            value={values.setCredential}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          /></Grid>
        <Grid item xs={12} >
          <TextField
            label={CaasData.year}
            id="mui-theme-provider-outlined-input"
            name="year"
            value={values.year}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          /></Grid>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker

              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label={CaasData.dateOfBirth}
              style={{ width: '60%' }}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}

            />

          </MuiPickersUtilsProvider>
          <div style={{ color: 'red' }}><span>{errorMessage}</span></div>
        </Grid>
        <Grid item xs={12} >
          <br />
          <div className={classes.root}>
            <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} onClick={handleSubmitForm}>
              {CaasData.saveButton}
            </Button>
            <Button variant="contained" color="primary" startIcon={<EditIcon />} >
              {CaasData.editButton}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
