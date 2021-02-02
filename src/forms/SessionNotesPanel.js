import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Avatar } from '@material-ui/core';
import { UseForm, Form } from '../models/UseForm';
import SessionNotesForm from './SessionNotesForm';
import { SessionNotes } from '../Models/SessionNotes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
//const panel1Data = new SessionNotes("Anna Jones", "12/12/2020 11:14am");
const panel1Data = [
  new SessionNotes("Anna Jones", "12/12/2020 11:14am"),
  new SessionNotes("Marry Jones", "11/10/2020 11:14am"),
  new SessionNotes("Kim Jones", "12/08/2020 11:14am"),
  new SessionNotes("Dave Martins", "09/12/2020 11:14am"),
  new SessionNotes("Duke Flors", "12/11/2020 11:14am"),
  new SessionNotes("Anthony Jones", "15/12/2020 11:14am"),
  new SessionNotes("Anthony Jones", "12/10/2020 11:14am"),
  new SessionNotes("Abel Jones", "16/01/2020 11:14am"),
  new SessionNotes("Anna Jones", "08/11/2020 11:14am"),
  new SessionNotes("", "")];
//call API to pull data from users notification for session notes
const headerData = [{
  imageUrl: "https://i.pravatar.cc/300?img=1",
  patientName: "Anna Jones",
  patientInitial: "Anna J.",
  sessionNotes: "Session Notes Form",
  isDone: false
}, {
  imageUrl: "https://i.pravatar.cc/300?img=2",
  patientName: "Mary Jones",
  patientInitial: "Mary J.",
  sessionNotes: "Session Notes Form",
  isDone: false
}, {
  imageUrl: "https://i.pravatar.cc/300?img=19",
  patientName: "Kim Jones",
  patientInitial: "Kim D.",
  sessionNotes: "Session Notes Form",
  isDone: false
},
{
  imageUrl: "https://i.pravatar.cc/300?img=10",
  patientName: "Dave Martins",
  patientInitial: "Dave M.",
  sessionNotes: " Session Notes Form",
  isDone: false
}, {
  imageUrl: "https://i.pravatar.cc/300?img=14",
  patientName: "Duke Flors",
  patientInitial: "Duke F.",
  sessionNotes: "Session Notes Form",
  isDone: false
}
  , {
  imageUrl: "https://i.pravatar.cc/300?img=12",
  patientName: "Anthony Jones",
  patientInitial: "Anthony A.",
  sessionNotes: "Session Notes Form",
  isDone: false
}
  , {
  imageUrl: "https://i.pravatar.cc/300?img=11",
  patientName: "Anthony Jones",
  patientInitial: "Anita J.",
  sessionNotes: "Session Notes Form",
  isDone: false
}
  , {
  imageUrl: "https://i.pravatar.cc/300?img=10",
  patientName: "Abel Jones",
  patientInitial: "Abel B.",
  sessionNotes: "Session Notes Form",
  isDone: false
}
  , {
  imageUrl: "https://i.",
  patientName: "Anna Jones",
  patientInitial: "Julius B.",
  sessionNotes: "Session Notes Form",
  isDone: false
}
  , {
  imageUrl: "https://i.pravatar",
  patientName: "",
  patientInitial: "",
  sessionNotes: "",
  isDone: false
}

]

export default function SessionNotesPanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Form title="Session Notes">
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label={headerData[0].patientInitial} icon={<Avatar src={headerData[0].imageUrl} />} {...a11yProps(0)} />
            <Tab label={headerData[1].patientInitial} icon={<Avatar src={headerData[1].imageUrl} />} {...a11yProps(1)} />
            <Tab label={headerData[2].patientInitial} icon={<Avatar src={headerData[2].imageUrl} />} {...a11yProps(2)} />
            <Tab label={headerData[3].patientInitial} icon={<Avatar src={headerData[3].imageUrl} />} {...a11yProps(3)} />
            <Tab label={headerData[4].patientInitial} icon={<Avatar src={headerData[4].imageUrl} />} {...a11yProps(4)} />
            <Tab label={headerData[5].patientInitial} icon={<Avatar src={headerData[5].imageUrl} />} {...a11yProps(5)} />
            <Tab label={headerData[6].patientInitial} icon={<Avatar src={headerData[6].imageUrl} />} {...a11yProps(6)} />
            <Tab label={headerData[7].patientInitial} icon={<Avatar src={headerData[7].imageUrl} />} {...a11yProps(7)} />
            <Tab label={headerData[8].patientInitial} icon={<Avatar src={headerData[8].imageUrl} />} {...a11yProps(8)} />
            <Tab label={headerData[9].patientInitial} icon={<Avatar src={headerData[9].imageUrl} />} {...a11yProps(9)} />

          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>

          <SessionNotesForm data={panel1Data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {headerData[1].patientName} {headerData[1].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {headerData[2].patientName} {headerData[2].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {headerData[3].patientName} {headerData[3].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {headerData[4].patientName} {headerData[4].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {headerData[5].patientName} {headerData[5].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {headerData[6].patientName} {headerData[6].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={7}>
          {headerData[7].patientName} {headerData[7].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={8}>
          {headerData[8].patientName} {headerData[8].sessionNotes}
        </TabPanel>
        <TabPanel value={value} index={9}>
          {headerData[9].patientName} {headerData[9].sessionNotes}
        </TabPanel>
      </div>
    </Form >
  );
}