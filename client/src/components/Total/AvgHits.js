import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import Title from '../Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function AvgHits() {

    var date = new Date().toLocaleString()
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title><SportsSoccerIcon fontSize="large" /> Average Hits</Title>
            <Typography component="p" variant="h2" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding:"10px"}}>
                182
      </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on {date}
            </Typography>
        </React.Fragment>
    );
}