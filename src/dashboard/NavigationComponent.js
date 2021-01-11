import React from 'react';
import clsx from 'clsx';
import logo from '../images/122px.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import Drawer from '@material-ui/core/Drawer';
import {
  Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton,
  ListItem, ListItemIcon, ListItemText
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { withRouter } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import TodayIcon from '@material-ui/icons/Today';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Avatar from '../dashboard/Avatar';
import Notifications from '../dashboard/Notifications';
import NotesIcon from '@material-ui/icons/Notes';
import { RouteConstants } from '../constants/CommonConstants';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#00a8ff',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  },
  menuButton: {
    marginRight: 36,

  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',


  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#b6ff7c',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: '#e9ff56',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavigationComponent(props) {
  console.log(props);
  const { history } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navList = [
    {
      text: 'Dashboard',
      icon: <LineStyleIcon />,
      onClick: () => history.push('/dashboard')
    },
    {
      text: 'Anna Otome',
      icon: <AccountCircleIcon />,
      onClick: () => history.push('/dash')
    },
    {
      text: 'Schedule',
      icon: <DateRangeIcon />,
      onClick: () => history.push('/dailyschs')
    },
    {
      text: 'New Patient',
      icon: <AccessibilityNewIcon />,
      onClick: () => history.push('/dash')
    },
    {
      text: 'Clients',
      icon: <PeopleAltIcon />,
      onClick: () => history.push('/dash')
    },
    {
      text: 'Service Providers',
      icon: <LocalHospitalIcon />,
      onClick: () => history.push('/dash')
    },
    {
      text: 'Locations',
      icon: <LocationOnIcon />,
      onClick: () => history.push('/dash')
    },
    {
      text: 'Allied Healthcare',
      icon: <AcUnitIcon />,
      onClick: () => history.push('/dash')
    },
    {
      text: 'Billing',
      icon: <ReceiptIcon />,
      onClick: () => history.push('/dash')
    }
  ]
    ;

  const navListBottom = [
    {
      text: 'Session Notes',
      icon: <NotesIcon />,
      onClick: () => history.push('/notespanel')
    },
    {
      text: 'Notifications',
      icon: <Notifications />,
      onClick: () => history.push('/dash')
    }
  ];

  const schedule = () => history.push(RouteConstants.SCHEDULE);

  const calendar = () => history.push('/calendar')
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" Wrap>
            <img src={logo} alt="logo" />
          </Typography>
          <div style={{ marginLeft: '52%' }}>
            <ButtonGroup variant="contained" color='secondary' >
              <Button startIcon={<TodayIcon />} onClick={calendar} >Calendar</Button>
              <Button startIcon={<TimelapseIcon />} >Yesterday</Button>
              <Button startIcon={<TodayIcon />} >Today</Button>
              <Button startIcon={<HourglassFullIcon />} >Tomorrow</Button>
              <Button startIcon={<ScheduleIcon />} onClick={schedule}>Schedule</Button>
              <Avatar />
            </ButtonGroup>

          </div>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          {navList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {navListBottom.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
       
      </main> */}
    </div>
  );
}


export default withRouter(NavigationComponent);