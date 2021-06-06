import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';
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
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }
    }, useGlobalFilter, useSortBy, usePagination)

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <>
                    <Typography variant="h4" component="div" gutterBottom>
                        FIFA Players
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Click on the Header rows to sort the respective columns ascending and decesending order.
                    </Typography>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            <span>
                                                {column.isSorted ? (column.isSortedDesc ? <ArrowDownwardIcon fontSize="small" /> : <ArrowUpwardIcon fontSize="small" />) : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                page.map(row => {
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
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                        <span style={{ padding: "20px" }}>
                            <Button ariant="contained" color="primary" onClick={() => gotoPage(0)} disabled={!canPreviousPage}><SkipPreviousIcon /></Button>
                            <Button ariant="contained" color="primary" onClick={() => previousPage()} disabled={!canPreviousPage}><ArrowBackIosIcon /></Button>
                            <strong>
                                Page{' '}
                                {pageIndex + 1} of {pageOptions.length}
                                {'  '}  | {'  '} Go to page: {' '}
                            </strong>
                            <TextField
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(pageNumber)
                                }}
                                style={{ padding: '0px', width: '50px', height: '20px' }}
                            />
                            <Button ariant="contained" color="primary" onClick={() => nextPage()} disabled={!canNextPage}><ArrowForwardIosIcon /></Button>
                            <Button ariant="contained" color="primary" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><SkipNextIcon /></Button>

                            <strong>Page Size:{' '}</strong>
                            <Select
                                id="demo-simple-select-outlined"
                                value={pageSize}
                                style={{ padding: '0px', width: '50px', height: '20px' }}
                                onChange={(e => setPageSize(Number(e.target.value)))}
                            >
                                {
                                    [10, 25, 50].map(pageSize => (
                                        <MenuItem key={pageSize} value={pageSize}>{pageSize}</MenuItem>
                                    ))
                                }
                            </Select>
                        </span>
                    </div>
                </>
            </Container>
        </main>
    )
}

function PlayerTable() {

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

export default PlayerTable