import React from 'react'
import TableHeader from './table header/TableHeader'
import TableBody from './table body/TableBody'

const Table = (props) => {
  return (
    <>
      <table cellSpacing={2}>
        <TableHeader {...props} />
        <TableBody {...props} />
      </table>
    </>
  )
}

export default Table
