import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import Title from '../Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Countries() {

    var date = new Date().toLocaleString()
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title><PublicIcon fontSize="large" /> Total Countries</Title>
            <Typography component="p" variant="h2" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                35
      </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on {date}
            </Typography>
        </React.Fragment>
    );
}