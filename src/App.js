import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './component/searchBar'
import PaginationBar from './component/paginationBar'
import TableBar from './component/tableBar'
import SearchStore from './store/searchStore'
import PaginationStore from './store/paginationStore'

const searchStore = new SearchStore()
const paginationStore = new PaginationStore()

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  dispatch
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

class App extends React.Component {
  handlePageChange = (e, page) => {
    this.props.pageChange(page)
  }

  render() {
    const { simpleReducer: { result, gender, dataList, pageSize }, dispatch } = this.props
    return (
      <div className="App">
        <SearchBar
          dispatch={dispatch}
          searchStore={searchStore}
          paginationStore={paginationStore}
        />

        <TableBar
          dataList={dataList}
        />

        <PaginationBar
          dispatch={dispatch}
          pageSize={pageSize}
          searchStore={searchStore}
          paginationStore={paginationStore}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
