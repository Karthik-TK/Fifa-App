import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import Title from '../Title';


const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function AvgAge() {

    var date = new Date().toLocaleString()
    const classes = useStyles();
    const [val, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/fifa/')
            .then(res => {
                setPosts(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

    return (
        <React.Fragment>
            <Title><PermContactCalendarIcon fontSize="large" /> Average Age</Title>
            <Typography component="p" variant="h2" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                30
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on {date}
            </Typography>
        </React.Fragment>
    );
}