import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Title from '../Title';
import { CenterFocusStrong } from '@material-ui/icons';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function AvgAge() {

    var date = new Date().toLocaleString()
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title><PermContactCalendarIcon fontSize="large"/> Average Age</Title>
            <Typography component="p" variant="h3" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding:"10px"}}>
                30
      </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on {date}
            </Typography>
            <div>
                <Link color="primary" href="/reports" onClick={preventDefault}>
                    View All
        </Link>
            </div>
        </React.Fragment>
    );
}