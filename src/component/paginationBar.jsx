import React from 'react'
import Pagination from '@material-ui/lab/Pagination';

export default function paginationBar(props) {
  const {
    dispatch,
    pageSize,
    paginationStore: {
      param,
      handlePage
    }
  } = props
  const handlePageChange = (page) => {
    handlePage(page)
    dispatch({
      type: 'ON_SEARCH',
      payload: {
        ...props.searchStore.param,
        ...props.paginationStore.param
      }
    })
  }

  return (
    <div style={{ padding: '0 300px' }}>
      <Pagination
        onChange={(e, v) => handlePageChange(v)}
        count={pageSize}
        shape="rounded"
      />
    </div>
  )
}
