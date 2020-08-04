import { observable, computed, action, decorate } from 'mobx'

class PaginationStore {
  param = {
    page: 1,
  }

  get getPage() {
    return this.param.page
  }

  handlePage = val => {
    this.param.page = val
  }
}

export default decorate(PaginationStore, {
  param: observable,
  getPage: computed,
  handlePage: action
})
