import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event) {
    event.preventDefault();
}

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
            <Title>Total FIFA Members</Title>
            <Typography component="p" variant="h4">
                17,982
      </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on {date}
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View All
        </Link>
            </div>
        </React.Fragment>
    );
}