import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Form } from '../../models/UseForm';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        margin: '10%'
    },
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ClientForm(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const { data } = props.location.state;
    const [patientId, setPatientId] = useState(data);
    let title = `Patient Detail ( ${patientId} )`;


    const showData = () => {
        console.log(patientId);

    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    showData();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Form title={title}>
                <div>

                    <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                    <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField id="standard-search" label="Search field" type="search" />
                    <TextField
                        id="standard-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>
                <div>
                    <br></br>

                    <AppBar position="static">
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Medical Info" {...a11yProps(0)} />
                            <Tab label="Insurance Detail" {...a11yProps(1)} />
                            <Tab label="Primary Care" {...a11yProps(2)} />
                            <Tab label="Documents" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        Medical Information
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Insurance Detail
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Primary Care
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Documents
                    </TabPanel>
                </div>
            </Form>
        </form>
    );
}
