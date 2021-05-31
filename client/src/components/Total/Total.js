import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import Title from '../Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Total() {

    var date = new Date().toLocaleString()
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title><GroupIcon fontSize="large" /> Total Members</Title>
            <Typography component="p" variant="h2" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                17,982
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on {date}
            </Typography>
        </React.Fragment>
    );
}