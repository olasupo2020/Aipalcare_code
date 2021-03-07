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
  id: 1,
  firstName: '',
  lastName: '',
  nhpn: '',
  govtBody: '',
  credential: '',
  year: '',
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
  const currentDate = new Date();



  const validate = (fieldValues = values, defaultDate) => {
    let temp = { ...errors }
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required."
    if ('lastName' in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required."
    if ('nhpn' in fieldValues)
      temp.nhpn = fieldValues.nhpn ? "" : "This field is required."
    if ('govtBody' in fieldValues)
      temp.govtBody = fieldValues.govtBody ? "" : "This field is required."
    if ('credential' in fieldValues)
      temp.credential = fieldValues.credential ? "" : "This field is required."
    if ('year' in fieldValues)
      temp.year = fieldValues.year ? "" : "This field is required."
    /*if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."*/
    if ('licenseNo' in fieldValues)
      temp.licenseNo = fieldValues.licenseNo.length > 9 ? "" : "Minimum 10 numbers required."
    if ('divisionNames' in fieldValues)
      temp.divisionNames = fieldValues.divisionNames.length != 0 ? "" : "This field is required."
    if ('date' in fieldValues)
      temp.date = fieldValues.date.length != 0 || fieldValues.date == defaultDate ? "" : "This field is required."
    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(err => err == "")

  }


  const handleDateChange = (date) => {

    if (date > currentDate) {
      setErrors({ date: "Invalid Date" });
      setSelectedDate(date);

    } else {
      setSelectedDate(date);
      values.date = date;
      setErrors({ date: "" });
      setIsError(false);
    }
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  } = UseForm(initData, true, validate);


  const handleSubmitForm = e => {
    e.preventDefault()
    console.log(isError);
    console.log(validate())
    if (validate() && !isError) {
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
            style={{ width: '60%' }}
            onChange={handleInputChange}
            error={Boolean(errors?.firstName)}
            helperText={errors?.firstName}
          />
          <div>
          </div>
        </Grid>
        <Grid item xs={12} >
          <TextField
            error={Boolean(errors?.lastName)}
            helperText={errors?.lastName}
            label={CaasData.lastName}

            id="mui-theme-provider-outlined-input"
            name="lastName"
            style={{ width: '60%' }}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12} >
          <FormControl style={{ width: '100%', margin: '0 20%' }}
            error={Boolean(errors?.divisionNames)}
          >
            <InputLabel id="demo-mutiple-name-label">{CaasData.specialization}</InputLabel>
            <Select


              name="divisionNames"
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleInputChange}
              input={<Input />}
              style={{ width: '60%' }}
            >
              {divisionNames.map((name) => (
                <MenuItem key={name} value={name} >
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors?.divisionNames}</FormHelperText>
          </FormControl>



        </Grid>
        <Grid item xs={12} >
          <TextField
            error={Boolean(errors?.nhpn)}
            helperText={errors?.nhpn}
            label={CaasData.nhpn}
            id="mui-theme-provider-outlined-input"
            name="nhpn"
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
            style={{ width: '60%' }}
            onChange={handleInputChange}
          /></Grid>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
              error={Boolean(errors?.date)}
              helperText={errors?.date}
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


        </Grid>
        <Grid item xs={12} >
          <br />
          <div className={classes.root}>
            <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} type="submit" onClick={handleSubmitForm}>
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