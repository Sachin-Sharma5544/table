import React from 'react'

const TableHeader = (props) => {
  const { columns } = props;

  console.log(columns)

  return (
    <thead>
      <tr >
        {columns.map(column => {
          return (<th key={column.header} style={{ width: "200px" }}>{column.header}</th>)
        })}
      </tr>
    </thead>
  )
}

export default TableHeader
