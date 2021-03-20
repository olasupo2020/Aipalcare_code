import React from 'react'
import { TextField } from '@material-ui/core';

export default function InputVal(props) {

    const { name, label, value,error=null, style, onChange } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            style={style}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}