import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './table.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import TextField from '@material-ui/core/TextField';
import { GlobalFilter } from './GlobalFilter';
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import { COLUMNS } from './columns'
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

const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateMyData, // This is a custom function that we supplied to our table instance
}) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)

    const onChange = e => {
        setValue(e.target.value)
    }

    // We'll only update the external data when the input is blurred
    const onBlur = () => {
        updateMyData(index, id, value)
    }

    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return <TextField value={value} onChange={onChange} onBlur={onBlur} />
}

const defaultColumn = {
    Cell: EditableCell,
}

function Table({ columns, data, updateMyData, skipPageReset }) {

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
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
        defaultColumn,
        autoResetPage: !skipPageReset,
        updateMyData,
    }, useGlobalFilter, usePagination)

    const { globalFilter, pageIndex } = state

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <>
                    <Typography variant="h4" component="div" gutterBottom>
                        Edit Players
                </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Edit Player Data.
                </Typography>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
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
                        </span>
                    </div>
                </>
            </Container >
        </main >
    )
}

function EditMember() {

    const [data, setData] = useState([]);
    const [skipPageReset, setSkipPageReset] = React.useState(false)
    const columns = React.useMemo(() => COLUMNS, [])
    useEffect(() => {
        (async () => {
            const result = await axios("http://localhost:8000/api/fifa/");
            setData(result.data);
        })();
    }, []);

    const updateMyData = (rowIndex, columnId, value) => {

        setSkipPageReset(true)
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    console.log(old[rowIndex].id)
                    axios.patch(`http://localhost:8000/api/fifa/${old[rowIndex].id}/`, {
                        [columnId]: value
                    }).then(res => {
                        toast.success('Player Info Updated!', { position: toast.POSITION.TOP_CENTER, autoClose: 8000 })
                    })
                        .catch(error => {
                            console.log(error)
                            toast.error('Error', { position: toast.POSITION.TOP_CENTER, autoClose: false })
                        })
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    }

    return (
        <Table columns={columns} data={data} updateMyData={updateMyData} skipPageReset={skipPageReset} />

    )
}

export default EditMember
