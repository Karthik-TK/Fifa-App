import React, { useMemo } from 'react';
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

export const MainTable = () => {

    const classes = useStyles();
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

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
        // selectedFlatrows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }
    }, useGlobalFilter, useSortBy, usePagination,
        // useRowSelect,
        // (hooks) => {
        //     hooks.visibleColumns.push((columns) => {
        //         return [
        //             {
        //                 id: 'selection',
        //                 Header: ({ getToggleAllRowsSelectedProps }) => (
        //                     <CheckBox {...getToggleAllRowsSelectedProps()} />
        //                 ),
        //                 Cell: ({ row }) => (
        //                     <CheckBox {...row.getToggleAllRowsSelectedProps} />
        //                 )
        //             },
        //             ...columns
        //         ]
        //     })
        // }
    )

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <>
                    <Typography variant="h4" component="div" gutterBottom>
                        Edit Players
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        click on the players to edit.
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
                    {/* <pre>
                        <code>
                            {JSON.stringify(
                                {
                                    selectedFlatrows: selectedFlatrows.map((row) => row.original),
                                },
                                null,
                                2
                            )}
                        </code>
                    </pre> */}
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
