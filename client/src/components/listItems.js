import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import BarChartIcon from '@material-ui/icons/BarChart';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import InfoIcon from '@material-ui/icons/Info';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIndIcon />
      </ListItemIcon>
      <ListItemText primary="Members" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Players" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ImportExportIcon />
      </ListItemIcon>
      <ListItemText primary="Export Data" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset><b>FIFA News</b></ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AnnouncementIcon />
      </ListItemIcon>
      <ListItemText primary="FIFA-rankings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AnnouncementIcon />
      </ListItemIcon>
      <ListItemText primary="Upcoming Events" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="COVID-19 Info" />
    </ListItem>
  </div>
);