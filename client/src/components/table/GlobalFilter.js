import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export const GlobalFilter = ({ filter, setFilter }) => {

    const classes = useStyles();
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)

    return (
        <span>
            <div className={classes.margin} style={{ paddingBottom: '25px' }}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <SearchIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="input-with-icon-grid"
                            label="Search Player Data"
                            value={value || ''}
                            onChange={(e) => {
                                setValue(e.target.value)
                                onChange(e.target.value)
                            }} />
                    </Grid>
                </Grid>
            </div>
        </span>
    )
}
