import React from 'react';
import axios from 'axios';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import GradeIcon from '@material-ui/icons/Grade';
import Title from './../Title';
class PotentialPlayers extends React.Component {

  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get("http://localhost:8000/api/fifa/").then((res) => {
      this.setState({ data: res.data });
    })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <React.Fragment>
        <Title> <GradeIcon fontSize="large" /> FIFA - Top Potential Players</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Team</b></TableCell>
              <TableCell><b>Hits</b></TableCell>
              <TableCell><b>Position</b></TableCell>
              <TableCell align="right"><b>Potential</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.team}</TableCell>
                <TableCell>{row.hits}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell align="right">{row.potential}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={9}
                rowsPerPage={10}
                count={0}
                page={0}
              />
            </TableRow>
          </TableFooter>
        </Table>
        <div className='seeMore' style={{ marginTop: '24px' }}>
          <Link color="primary" href="/members">
            See more classifications
              </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default PotentialPlayers;