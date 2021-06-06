import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import AddMember from './forms/AddMember';
import { Link, Switch, Route } from 'react-router-dom';
import MainCharts from './charts/MainCharts';
import Dashboard from './Dashboard';
import PlayerTable from './table/PlayerTable';
import { ImportExport } from './export/ImportExport';
import EditMember from './table/EditMember';
import DeleteTable from './table/DeleteTable';
import { NotFound } from './Errors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            FIFA Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* ----------------------------------------MAIN LISTS------------------------------------ */}
        <div>
          <List aria-label="main mailbox folders">
            <ListItemLink to="/" primary="Dashboard" icon={<DashboardIcon />} />
            <ListItemLink to="/members" primary="Members" icon={<AssignmentIndIcon />} />
            <ListItemLink to="/reports" primary="Reports" icon={<BarChartIcon />} />
            <ListItemLink to="/add" primary="Add Players" icon={<PersonAddIcon />} />
            <ListItemLink to="/edit" primary="Edit Players" icon={<EditIcon />} />
            <ListItemLink to="/delete" primary="Delete Players" icon={<DeleteIcon />} />
            <ListItemLink to="/export" primary="Export Data" icon={<ImportExportIcon />} />
          </List>
          <Divider />
          {/* -------------------------------------SECONDARY LISTS---------------------------------- */}
          <List aria-label="secondary mailbox folders">
            <ListItemLink rel="noopener" to="/fifa-rank" primary="FIFA Rankings" icon={<SportsFootballIcon />} />
            <ListItemLink rel="noopener" to="/news" primary="Latest News" icon={<AnnouncementIcon />} />
            <ListItemLink rel="noopener" to="/covid" primary="COVID-19 Info" icon={<InfoIcon />} />
          </List>
        </div>
      </Drawer>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route path="/add" component={AddMember}></Route>
        <Route path="/delete" component={DeleteTable}></Route>
        <Route path="/edit" component={EditMember}></Route>
        <Route path="/reports" component={MainCharts}></Route>
        <Route path="/members" component={PlayerTable}></Route>
        <Route path="/export" component={ImportExport}></Route>
        <Route path="/404" component={NotFound}></Route>
        <Route path='/fifa-rank' component={() => {
          window.location.replace('https://www.fifa.com/fifa-world-ranking/');
          return null;
        }} />
        <Route path='/news' component={() => {
          window.location.replace('https://www.fifa.com/news/');
          return null;
        }} />
        <Route path='/covid' component={() => {
          window.location.replace('https://www.google.com/search?q=covid-19');
          return null;
        }} />
      </Switch>
    </div>
  );
}