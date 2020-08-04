import React from 'react'
import { observer } from 'mobx-react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

function SearchBar(props) {
  const onSearch = () => {
    props.dispatch({
      type: 'ON_SEARCH',
      payload: {
        ...props.searchStore.param,
        ...props.paginationStore.param
      }
    })
  }

  const {
    searchStore: {
      param: {
        firstName = '',
        lastName = '',
        gender = ''
      },
      handleReset,
      handleFirstName,
      handleLastName,
      handleGender
    }
  } = props
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <FormControl>
        <TextField
          id="standard-basic"
          label="First Name"
          value={firstName}
          onChange={(e) => handleFirstName(e.target.value)}
        />
      </FormControl>
          &nbsp;&nbsp;
      <FormControl>
        <TextField
          id="standard-basic"
          label="Last Name"
          value={lastName}
          onChange={(e) => handleLastName(e.target.value)}
        />
      </FormControl>
          &nbsp;&nbsp;
      <FormControl style={{ width: '100px' }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={(e) => handleGender(e.target.value)}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
        </Select>
      </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained" color="primary" onClick={onSearch}>Search</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained" onClick={handleReset}>Reset</Button>
    </div>
  )
}

export default observer(SearchBar)
