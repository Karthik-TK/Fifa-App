// import React from 'react';
// import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import AnnouncementIcon from '@material-ui/icons/Announcement';
// import InfoIcon from '@material-ui/icons/Info';
// import Dashboard from './Dashboard';
// import AddMember from './forms/AddMember';

// export const mainListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Dashboard" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIndIcon />
//       </ListItemIcon>
//       <ListItemText primary="Members" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <BarChartIcon />
//       </ListItemIcon>
//       <ListItemText primary="Reports" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <PersonAddIcon />
//       </ListItemIcon>
//       <ListItemText primary="Add Players" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ImportExportIcon />
//       </ListItemIcon>
//       <ListItemText primary="Export Data" />
//     </ListItem>
//   </div>
// );

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset><b>FIFA News</b></ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AnnouncementIcon />
//       </ListItemIcon>
//       <ListItemText primary="FIFA-rankings" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AnnouncementIcon />
//       </ListItemIcon>
//       <ListItemText primary="Upcoming Events" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <InfoIcon />
//       </ListItemIcon>
//       <ListItemText primary="COVID-19 Info" />
//     </ListItem>
//   </div>
// );

// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Paper from '@material-ui/core/Paper';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import Typography from '@material-ui/core/Typography';
// import { Route, MemoryRouter } from 'react-router';
// import { Link as RouterLink } from 'react-router-dom';

// import DashboardIcon from '@material-ui/icons/Dashboard';
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import AnnouncementIcon from '@material-ui/icons/Announcement';
// import InfoIcon from '@material-ui/icons/Info';

// function ListItemLink(props) {
//   const { icon, primary, to } = props;

//   const renderLink = React.useMemo(
//     () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
//     [to],
//   );

//   return (
//     <li>
//       <ListItem button component={renderLink}>
//         {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
//         <ListItemText primary={primary} />
//       </ListItem>
//     </li>
//   );
// }

// ListItemLink.propTypes = {
//   icon: PropTypes.element,
//   primary: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles({
//   root: {
//     width: 360,
//   },
// });

// export default function ListRouter() {
//   const classes = useStyles();

//   return (
//     <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
//       <div className={classes.root}>
//         <Route>
//           {({ location }) => (
//             <Typography gutterBottom>Current route: {location.pathname}</Typography>
//           )}
//         </Route>
//         <Paper elevation={0}>
//           <List aria-label="main mailbox folders">
//             <ListItemLink to="/" primary="Dashboard" icon={<DashboardIcon />} />
//             <ListItemLink to="/members" primary="Members" icon={<AssignmentIndIcon />} />
//             <ListItemLink to="/reports" primary="Reports" icon={<BarChartIcon />} />
//             <ListItemLink to="/add" primary="Add Players" icon={<PersonAddIcon />} />
//             <ListItemLink to="/export" primary="Export Data" icon={<ImportExportIcon />} />
//           </List>
//           <Divider />
//           <List aria-label="secondary mailbox folders">
//             <ListItemLink to="/" primary="FIFA Rankings"icon={<AnnouncementIcon />}  />
//             <ListItemLink to="/" primary="Upcoming Events"icon={<AnnouncementIcon />}  />
//             <ListItemLink to="/" primary="COVID-19 Info"icon={<InfoIcon />}  />
//           </List>
//         </Paper>
//       </div>
//     </MemoryRouter>
//   );
// }