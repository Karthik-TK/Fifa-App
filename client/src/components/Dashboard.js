import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from './charts/Hits';
import Potential from './charts/Potential';
import Total from './total/Total';
import AvgAge from './total/AvgAge';
import AvgHits from './total/AvgHits';
import Countries from './total/Countries';
import PotentialPlayers from './table/PotentialPlayers';

const useStyles = makeStyles((theme) => ({
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
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
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
    height: 'auto',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(true);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {/* Total Countries */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Countries />
            </Paper>
          </Grid>
          {/* Total FIFA Members */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Total />
            </Paper>
          </Grid>
          {/* Average Age */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <AvgAge />
            </Paper>
          </Grid>
          {/* Average Hits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <AvgHits />
            </Paper>
          </Grid>
          {/* Chart 1*/}
          <Grid item xs={12} md={8} lg={6}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          {/* Chart 2*/}
          <Grid item xs={12} md={8} lg={6}>
            <Paper className={fixedHeightPaper}>
              <Potential />
            </Paper>
          </Grid>
          {/* FIFA - Top Potential Players */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <PotentialPlayers />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
        </Box>
      </Container>
    </main>
  );
}