import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  TextField, Grid, Button, Select, InputLabel, Input, MenuItem, Checkbox, FormControl
  , ListItemText
} from '@material-ui/core';
import { UseForm, Form } from '../Models/UseForm';
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

const names = [
  'Speech Language Pathologist',
  'Occupational Therapist',
  'Physical Therapist',

];




export default function ServiceProviderForm() {
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
        <Grid item xs={12}  >

          <TextField
            label={CaasData.firstName}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="firstName"
            value={values.firstName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />


          <TextField
            label={CaasData.lastName}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="lastName"
            value={values.lastName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />


          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            value={credential}
            onChange={handleChange}
            input={<Input />}
            style={{ width: 310 }}

          >
            {names.map((name) => (
              <MenuItem key={name} value={name} >
                <Checkbox checked={credential.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>


        </Grid>

        <Grid item xs={12}>
          <TextField
            label={CaasData.nhpn}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="nhpn"
            value={values.nhpn}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />

          <TextField
            label={CaasData.licenseNo}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="licenseNo"
            value={values.licenseNo}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />

          <TextField
            label={CaasData.govtBody}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="govtBody"
            value={values.govtBody}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label={CaasData.credential}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="credential"
            value={values.setCredential}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
          <TextField
            label={CaasData.year}
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="year"
            value={values.year}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
     
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      
         
            <KeyboardDatePicker
           
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label={CaasData.dateOfBirth}
              style={{ width: 300 }}
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              
            />
            


          </MuiPickersUtilsProvider>
     
          
        </Grid>
        <Grid item xs={12}>
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
