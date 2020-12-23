import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField, Grid, Button, Select,InputLabel,Input,MenuItem,Checkbox,FormControl
,ListItemText } from '@material-ui/core';
import { UseForm, Form } from '../Models/UseForm';
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
    <Form title="Clinician Registration Form">
      <Grid container spacing={3}>
        <Grid item xs={12}  >
       
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
            label="National Health Provider Number"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
        
          <TextField
            label="License Number"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
    
<TextField
            label="Governing Body"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
</Grid>
          
          <Grid item xs={12}>
            <TextField
            label="Governing Body"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
                 <TextField
            label="Governing Body"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300  }}
            onChange={handleInputChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date of birth"
                  style={{ width: 300  }}
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
