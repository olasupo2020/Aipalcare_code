import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


export function UseForm(initialValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = e => {

    e.preventDefault();
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange)
      validate({ [name]: value })

  }

  /*
  const resetForm = () => {
    setValues(initialValues);
    setErrors({})
}*/

  return {

    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    //resetForm

  }

}

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '70%',
      margin: theme.spacing(1),
    },

    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,

    },
  }

}))


export function Form(props) {

  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <Paper className={classes.paper} style={{ margin: '8%' }}>
      <form className={classes.root} >

        <div>
          <br />
          <h2 >{props.title} </h2>
          <br />
        </div>
        {props.children}

      </form>
    </Paper>
  )
}