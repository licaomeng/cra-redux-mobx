import React from 'react';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import FormControl from '@material-ui/core/FormControl';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch({
    type: 'SIMPLE_ACTION',
    payload: 123
  }),

  genderAction: (gender) => dispatch({
    type: 'GENDER_ACTION',
    payload: gender
  })
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends React.Component {
  simpleAction = () => {
    this.props.simpleAction();
  }

  handleGender = (gender) => {
    this.props.genderAction(gender);
  }

  render() {
    const { simpleReducer: { result, gender, dataList } } = this.props
    const rows = []
    return (
      <div className="App">
        <p>{result}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FormControl>
            <TextField id="standard-basic" label="First Name" />
          </FormControl>
          &nbsp;&nbsp;
          <FormControl>
            <TextField id="standard-basic" label="Last Name" />
          </FormControl>
          &nbsp;&nbsp;
          <FormControl style={{ width: '100px' }}>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // defaultValue={'none'}
            // value={gender}
            // onChange={this.handleGender}
            >
              {/* <MenuItem value={"none"}>None</MenuItem> */}
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" color="primary" onClick={this.simpleAction}>
            Search
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="contained" onClick={this.simpleAction}>
            Reset
        </Button>
        </div>

        {/* <TableContainer component={Paper}> */}
        <div style={{ padding: '0 300px' }}>
        <Table
          // className={classes.table}
          aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
        <div style={{ padding: '0 300px' }}>
        <Pagination count={10} shape="rounded" />
        </div>
        {/* </TableContainer> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
