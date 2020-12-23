import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, Button,Divider } from '@material-ui/core';
import { UseForm} from '../models/UseForm';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';


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
            label="Client Name"
            variant="filled"
             
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
       
         
          <TextField
            label="Date of Session"
            variant="filled"
            disabled          
            id="mui-theme-provider-outlined-input"
            name="Date of Session"
            value={values.dateOfSession}
            style={{ width: 300 }}
            onChange={handleInputChange}         
          />
         
         <TextField
            label="Date of Birth"
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
            label="Age"
            variant="filled"
            disabled    
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />

        <TextField
            label="Date of Initial Evaluation"
            variant="filled"
            disabled    
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
          <TextField
            label="Treatment period"
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
            label="Primary Area of Diagnosis & ICD-10"
            variant="filled"
            disabled    
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
    
<TextField
            label="CPT Treatment code"
            variant="filled"
            disabled    
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300 }}
            onChange={handleInputChange}
          />
            <TextField
            label="Parent/Caregiver Name"
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
            label="Clinician"
            variant="filled"
            disabled    
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300  }}
            onChange={handleInputChange}
          />
             <TextField
            label="Cosignor"
            variant="filled"
            disabled    
            id="mui-theme-provider-outlined-input"
            name="clientName"
            value={values.clientName}
            style={{ width: 300  }}
            onChange={handleInputChange}
          />
          <Divider light />
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
  
  );
}
