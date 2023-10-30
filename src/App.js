import './App.css';
import Table from './table/Tables';
import { columns } from './table/tableColumnss';
import { useState } from 'react';

function App() {

  const [rowData, setRowData] = useState([]); // Initialize with one empty row

  const handleAddRow = () => {
    setRowData([...rowData, {}]); // Add a new empty row
  };

  return (
    <>
      <button onClick={handleAddRow}> Add row</button>
      <Table columns={columns} rowData={rowData} /></>
  );
}

export default App;
