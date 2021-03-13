import { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { TextField, Grid, Button } from '@material-ui/core';
import { UseForm, Form } from '../models/UseForm';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';
import CaaSData from '../contents/patient-basic.json';
import AutocompleteService from './AutocompleteService';
import NewPatientModel from '../models/NewPatientModel';
import { NewPatientService } from '../services/NewPatientService';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export const useStyles = makeStyles((theme) => ({
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




export default function PrimaryCareGiverForm() {

    //create service instance
    const svc = new NewPatientService;

    const classes = useStyles();
    const { values, setValues, handleInputChange } = UseForm(NewPatientModel);

    function handleOnClick() {
        svc.save(values);
        console.log(values);

    }

    return (
        <Form title="Primary Care Giver">

            <Grid container>
                <Grid item xs={10}>
                    <TextField
                        label={CaaSData.firstName}
                        variant="outlined"
                        name="firstName"
                        value={values.firstName}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />
                    <TextField
                        label={CaaSData.middleName}
                        variant="outlined"
                        name="middleName"
                        value={values.middleName}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />
                    <TextField
                        label={CaaSData.lastName}
                        variant="outlined"
                        value={values.lastName}
                        name="lastName"
                        style={{ width: 400 }}
                        onChange={handleInputChange} />
                    <TextField
                        label={CaaSData.emailAddress}
                        variant="outlined"
                        name="emailAddress"
                        value={values.emailAddress}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />
                    <TextField
                        label={CaaSData.relationship}
                        variant="outlined"
                        name="relationship"
                        value={values.relationship}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />
                    <TextField
                        label={CaaSData.address}
                        variant="outlined"
                        name="address"
                        value={values.address}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />
                    <TextField
                        label={CaaSData.phoneNumber}
                        variant="outlined"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />

                    <TextField
                        label={CaaSData.faxNumber}
                        variant="outlined"
                        name="faxNumber"
                        value={values.faxNumber}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />

                </Grid>

                <Grid item xs={10}>
                    <TextField
                        label={CaaSData.practice}
                        variant="outlined"
                        name="practice"
                        value={values.practice}
                        style={{ width: 400 }}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={10}>
                    <br />
                    <div className={classes.root}>
                        <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />}
                            onClick={handleOnClick}>
                            {CaaSData.saveButton}
                        </Button>
                        <Button variant="contained" color="primary" startIcon={<EditIcon />}>
                            {CaaSData.editButton}
                        </Button>
                    </div>
                </Grid>


            </Grid>
        </Form>
    );
}
