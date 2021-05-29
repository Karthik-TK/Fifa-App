import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AgeChart from './AgeChart';
import BarChart from './OverallChart';
import PotentialChart from './PoentialChart';
import HitsChart from './HitsChart';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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

export default function Main() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4" component="div" gutterBottom>
                    Reports
                    </Typography>
                <Grid container spacing={3}>
                    {/* Nationality*/}
                    <Grid item xs={12} md={8} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            <AgeChart />
                        </Paper>
                    </Grid>
                    {/* Overall */}
                    <Grid item xs={12} md={8} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            <BarChart />
                        </Paper>
                    </Grid>
                    {/* Potential */}
                    <Grid item xs={12} md={8} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            <PotentialChart />
                        </Paper>
                    </Grid>
                    {/* Hits */}
                    <Grid item xs={12} md={8} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            <HitsChart />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}
