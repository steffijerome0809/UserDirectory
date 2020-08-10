import React from 'react';
import BootstrapTable from './components/table';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">User Directory</h1>
      <h4 className="text-center">Click on a category to sort</h4>
    <BootstrapTable/>
    </div>
  );
}

export default App;
