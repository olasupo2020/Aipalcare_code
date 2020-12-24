import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { UseForm, Form } from '../models/UseForm';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';
import CaaSData from '../contents/org-registration.json';
import OrganizationModel from '../models/OrganizationModel';
import { OrganizationService as svc } from '../services/OrganizationService';



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
  const { values, setValues, handleInputChange } = UseForm(OrganizationModel);

  
  return (
    <Form title="Organization Registration Form">
      <Grid container>
        <Grid item xs={12}>

          <TextField
            label={CaaSData.companyName}
            variant="outlined"

            value={values.companyName}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          <TextField
            label={CaaSData.licenseNo}
            variant="outlined"
            value={values.licenseNo}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          <TextField
            label={CaaSData.nhpn}
            variant="outlined"
            value={values.nhpn}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />

        </Grid>

        <Grid item xs={12}>
          <TextField
            label={CaaSData.pryRepFN}
            variant="outlined"
            value={values.pryRepFN}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          <TextField
            label={CaaSData.pryRepLN}
            variant="outlined"
            value={values.pryRepLN}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />
          <TextField
            label={CaaSData.govtBody}
            variant="outlined"
            value={values.govtBody}
            style={{ width: 400 }}
            onChange={handleInputChange}
          />

        </Grid>
        <Grid item xs={12}>
          <br />
          <div className={classes.root}>
            <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />}>
              {CaaSData.saveButton}
            </Button>
            <Button variant="contained" color="primary" startIcon={<EditIcon />} >
              {CaaSData.editButton}
            </Button>
          </div>
        </Grid>


      </Grid>
    </Form>
  );
}
