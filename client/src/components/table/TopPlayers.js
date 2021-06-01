import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination, useRowSelect } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { GlobalFilter } from './GlobalFilter';
import GradeIcon from '@material-ui/icons/Grade';
import Title from '../Title';
import { Checkbox } from './Checkbox';

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
        selectedFlatRows,
        state,
        setGlobalFilter,
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
        {/* <main className={classes.content}>
            <div className={classes.appBarSpacer} /> */}
            <Container maxWidth="lg" className={classes.container}>
                {/* <> */}
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
                {/* </> */}
            </Container >
        {/* </main > */}
        </React.Fragment>
    )
}



function TopPlayers() {

    // const [tab, setTable] = useState([])
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/fifa/')
    //         .then(res => {
    //             setTable(res.data)
    //             convert(res.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])

    // function convert(val) {
    //     console.log("val :", val)
    //     console.log("tab :", tab.map(i => i))
    // }
    // const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => tab, [])

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     page,
    // nextPage,
    // previousPage,
    // canNextPage,
    // canPreviousPage,
    // pageOptions,
    // gotoPage,
    // pageCount,
    // setPageSize,
    // selectedFlatrows,
    // prepareRow,
    // state,
    // setGlobalFilter,
    // } = useTable({
    //     columns,
    //     data,
    //     initialState: {
    //         pageIndex: 0,
    //         sortBy: [
    //             {
    //                 id: 'columnId',
    //                 desc: false
    //             }
    //         ]
    //     }
    // }, useSortBy
    // )

    // const { globalFilter, pageIndex, pageSize } = state

    const [data, setData] = useState([]);
    // const [skipPageReset, setSkipPageReset] = React.useState(false)
    const columns = React.useMemo(() => COLUMNS, [])
    // const [data, setData] = React.useState(() => MOCK_DATA, [])
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