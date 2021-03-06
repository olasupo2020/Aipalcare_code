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
import FormHelperText from '@material-ui/core/FormHelperText';



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
  id:1,
  firstName: '',
  lastName: '',
  nhpn: '',
  govtBody: '',
  credential: '',
  year:'',
  licenseNo: '',
  date: '',
  divisionNames: '',
  isPermanent: false
}

const divisionNames = [
  'Speech Language Pathologist',
  'Occupational Therapist',
  'Physical Therapist',

];




export default function ServiceProviderForm() {
  const classes = useStyles();
  const defaultDate = '2014-08-18T21:11:54';
  const [selectedDate, setSelectedDate] = useState(new Date(defaultDate));
  const [isError, setIsError] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  const currentDate = initData.todayDate;

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



  const handleSubmitForm = (event) => {
    if (!error) {
      axios.post('https://jsonplaceholder.typicode.com/posts', values)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      console.log(values);
    }
    else {
      console.log("There is error in your input");
    }
  }
};


const {
  values,
  setValues,
  errors,
  setErrors,
  handleInputChange
} = UseForm(initData, true, validate);


const handleSubmitForm  = e => {
    e.preventDefault()
    console.log(isError);
    console.log(validate())
    if (validate() && !isError){
      console.log(values);
     
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
            error={Boolean(errors?.firstName)}
            helperText={errors?.firstName}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
             error={Boolean(errors?.lastName)}
             helperText={errors?.lastName}
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
             error={Boolean(errors?.nhpn)}
             helperText={errors?.nhpn}
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
               error={Boolean(errors?.licenseNo)}
               helperText={errors?.licenseNo}
            label={CaasData.licenseNo}
            id="mui-theme-provider-outlined-input"
            name="licenseNo"
            value={values.licenseNo}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          /></Grid>

        <Grid item xs={12} >
          <TextField
             error={Boolean(errors?.govtBody)}
             helperText={errors?.govtBody}
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
              error={Boolean(errors?.credential)}
              helperText={errors?.credential}
            label={CaasData.credential}
            id="mui-theme-provider-outlined-input"
            name="credential"
            value={values.setCredential}
            style={{ width: '60%' }}
            onChange={handleInputChange}
          /></Grid>
        <Grid item xs={12} >
          <TextField
            error={Boolean(errors?.year)}
            helperText={errors?.year}
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
            <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />}  type="submit" onClick={handleSubmitForm}>
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