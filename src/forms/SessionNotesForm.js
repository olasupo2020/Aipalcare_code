import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button, Divider } from '@material-ui/core';
import { UseForm } from '../models/UseForm';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import CaaSData from '../contents/session-notes.json';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function SessionNotesForm(props) {
  const classes = useStyles();
  const { values, setValues, handleInputChange } = UseForm(props.data);

  console.log(values);
  return (

    <Grid container spacing={2}>
      <h5>{values.clientName}</h5>
      <Grid item xs={12}  >

        <TextField
          label={CaaSData.clientName}
          variant="filled"

          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />


        <TextField
          label={CaaSData.dateOfSession}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="Date of Session"
          value={values.dateOfSession}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />

        <TextField
          label={CaaSData.dateOfBirth}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="Date of Birth"
          value={values.dateOfBirth}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />

      </Grid>

      <Grid item xs={12}>
        <TextField
          label={CaaSData.age}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />

        <TextField
          label={CaaSData.dateInit}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />
        <TextField
          label={CaaSData.treatmentPeriod}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />


      </Grid>

      <Grid item xs={12}>
        <TextField
          label={CaaSData.pryDiagnosis}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />

        <TextField
          label={CaaSData.cptCode}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />
        <TextField
          label={CaaSData.parentName}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />

      </Grid>
      <Grid item xs={12}>
        <TextField
          label={CaaSData.clinician}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />
        <TextField
          label={CaaSData.cosignor}
          variant="filled"
          disabled
          id="mui-theme-provider-outlined-input"
          name="clientName"
          value={values.clientName}
          style={{ width: 300 }}
          onChange={handleInputChange}
        />
        <Divider light />
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

  );
}
