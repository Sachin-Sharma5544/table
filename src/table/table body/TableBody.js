import React from 'react';

const TableBody = (props) => {
  const { columns, rowData } = props;

  const renderRow = (row, rowIndex) => {
    return (
      <tr key={rowIndex}>
        {columns.map((column, columnIndex) => {
          switch (column.fieldType) {
            case 'dropdown':
              return <td><select key={columnIndex}><option>This is option</option></select></td>;
            case 'autocomplete':
              return <td><input key={columnIndex} type="text" placeholder="Autocomplete" /></td>;
            case 'DatePicker':
              return <td><input key={columnIndex} type="date" /></td>;
            default:
              return <td><input key={columnIndex} type="text" /></td>;
          }
        })}
      </tr>
    );
  };

  return (
    <tbody>
      {rowData.map((row, index) => renderRow(row, index))}
    </tbody>
  );
};

export default TableBody;
