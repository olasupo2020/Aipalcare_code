import React, { Component } from 'react';
import ScheduleAptForm from '../FormComponents/ScheduleAptForm';
import { Paper } from '@material-ui/core';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';



const useStyles = makeStyles( theme =>({
    pageContent:{
        margin:theme.spacing(5),
        padding: theme.spacing(3)
    }
  
  }))

export default function Schedules() {

    const classes = useStyles();

    return (

        <Paper className={classes.pageContent} >
            <ScheduleAptForm />
            </Paper>
    )
     
        
    
}