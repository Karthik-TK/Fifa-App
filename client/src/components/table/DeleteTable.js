import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTable, useGlobalFilter, useRowSelect } from 'react-table';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { GlobalFilter } from './GlobalFilter';
import DeleteIcon from '@material-ui/icons/Delete';
import './table.css';
import { Checkbox } from './Checkbox';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

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
        // selectedFlatRows,
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
                        Delete Players
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
                    {/* <pre>
                        <code>
                            {JSON.stringify(
                                {
                                    selectedFlatRows: selectedFlatRows.map((row) => row.original),
                                },
                                null,
                                2
                            )}
                        </code>
                    </pre> */}
                </>
            </Container >
        </main >
    )
}

function DeleteTable() {

    const [tab, setTable] = useState([]);

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
                            const dataCopy = [...tab];
                            dataCopy.splice(tableProps.row.index, 1);
                            setTable(dataCopy);
                            deleteRow(tableProps.row.original.id)
                        }}>
                        <DeleteIcon />
                    </span>
                </div>
            )
        }
    ]

    const columns = React.useMemo(() => COLUMNS, [])

    useEffect(() => {
        (async () => {
            const result = await axios("http://localhost:8000/api/fifa/");
            setTable(result.data);
        })();
    }, []);

    function deleteRow(id) {
        axios.delete(`http://localhost:8000/api/fifa/${id}/`,)
            .then(res => {
                toast.success('Player Deleted!', { position: toast.POSITION.TOP_CENTER, autoClose: 8000 })
            })
            .catch(error => {
                console.log(error)
                toast.error('Error', { position: toast.POSITION.TOP_CENTER, autoClose: false })
            })
    }

    return (
        <Table columns={columns} data={tab} />
    )
}

export default DeleteTable