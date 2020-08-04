import { observable, action, decorate } from 'mobx'

class SearchStore {
  param = {
    firstName: '',
    lastName: '',
    gender: ''
  }

  handleFirstName = val => {
    this.param.firstName = val
  }

  handleLastName = val => {
    this.param.lastName = val
  }

  handleGender = val => {
    this.param.gender = val
  }

  handleReset = () => {
    this.param = {
      firstName: '',
      lastName: '',
      gender: ''
    }
  }
}

export default decorate(SearchStore, {
  param: observable,
  handleFirstName: action,
  handleLastName: action,
  handleGender: action
})
