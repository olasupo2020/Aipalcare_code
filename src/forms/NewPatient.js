import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import NewPatientForm from './NewPatientForm';
import PatientTabs from './PatientTabs';
import { Form } from '../models/UseForm';
import { Link } from 'react-router-dom';
import PrimaryContactForm from "./PrimaryContactForm";
import PrimaryCareGiverForm from './PrimaryCareGiverForm';
import AutocompleteService from './AutocompleteService';
import NewPatientService from '../services/NewPatientService';




const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);


    return (
        <div style={{ margin: '5%' }}>

            <NewPatientForm />
            <PrimaryCareGiverForm />
            <PrimaryContactForm />
            <PatientTabs />



        </div>

    );
}