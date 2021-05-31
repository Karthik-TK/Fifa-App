import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import { useTable, useGlobalFilter, useRowSelect } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { GlobalFilter } from './GlobalFilter';
import DeleteIcon from '@material-ui/icons/Delete';
import './table.css';
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

export const DeleteTable = () => {

    const classes = useStyles();
    const [tab, setTable] = useState([])

    useEffect(() => {
        console.log("useEffect called");
        async function loadData() {
            await axios.get('http://localhost:8000/api/fifa/')
                .then(res => {
                    setTable(res.data)
                    console.log(res.data, setTable())
                })
                .catch(error => {
                    console.log(error)
                })
        }
        loadData()
    }, [])

    const COLUMNS = [
        {
            Header: 'Player ID',
            accessor: 'player_id',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Nationality',
            accessor: 'nationality',
        },
        {
            Header: 'Position',
            accessor: 'position',
        },
        {
            Header: 'Overall',
            accessor: 'overall',
        },
        {
            Header: 'Age',
            accessor: 'age',
        },
        {
            Header: 'Hits',
            accessor: 'hits',
        },
        {
            Header: 'Potential',
            accessor: 'potential',
        },
        {
            Header: 'Team',
            accessor: 'team'
        },
        {
            Header: "Edit Delete",
            id: "delete",
            accessor: (str) => "delete",
            Cell: (tableProps) => (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span style={{ cursor: 'pointer' }}
                        onClick={() => {
                            // ES6 Syntax use the rvalue if your data is an array.
                            // const dataCopy = [...tab];
                            // It should not matter what you name tableProps. It made the most sense to me.
                            // dataCopy.splice(tableProps.row.id, 1);
                            deleteRow(tableProps.row.original.id)
                            console.log(tableProps.row.original.id, tableProps.row.original)
                            // setTable(dataCopy);
                        }}>
                        <DeleteIcon />
                    </span>
                </div>
            )
        }
    ]

    async function deleteRow(id) {
        await axios.delete(`http://localhost:8000/api/fifa/${id}`,)
            .then(res => {
                console.log("ID:", id, `http://localhost:8000/api/fifa/${id}`)
                console.log(res)
                setTable(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

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
        data
    }, useGlobalFilter, useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({ row }) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        )
                    },
                    ...columns
                ]
            })
        })

    const firstPageRows = rows.slice(0, 10)
    const { globalFilter } = state

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <>
                    <Typography variant="h4" component="div" gutterBottom>
                        Edit Players
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Search and Click on the player to delete.
                    </Typography>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
                    <pre>
                        <code>
                            {JSON.stringify(
                                {
                                    selectedFlatRows: selectedFlatRows.map((row) => row.original),
                                },
                                null,
                                2
                            )}
                        </code>
                    </pre>
                </>
            </Container >
        </main >
    )
}
