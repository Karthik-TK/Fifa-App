import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useTable, useGlobalFilter, useRowSelect } from 'react-table';
import { COLUMNS } from './columns';
import './table.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GradeIcon from '@material-ui/icons/Grade';
import Title from '../Title';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
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
        height: 240,
    },
}));

function Table({ columns, data }) {
    const classes = useStyles();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
        initialState: {
            pageIndex: 0,
            sortBy: [
                {
                    id: 'columnId',
                    desc: false
                }
            ]
        }
    }, useGlobalFilter, useRowSelect)

    const firstPageRows = rows.slice(0, 10)

    return (
        <React.Fragment>
            <Title> <GradeIcon fontSize="large" /> FIFA - Top 10 Players</Title>
            <Container maxWidth="lg" className={classes.container}>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            firstPageRows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </Container >
        </React.Fragment>
    )
}


function TopPlayers() {

    const [data, setData] = useState([]);
    const columns = React.useMemo(() => COLUMNS, [])
    useEffect(() => {
        (async () => {
            const result = await axios("http://localhost:8000/api/fifa/");
            setData(result.data);
        })();
    }, []);

    return (
        <Table columns={columns} data={data} />
    )
}

export default TopPlayers