import './App.css';
import Dropdown from './components/Dropdown';
import React, { useState } from 'react';

function App() {
  const[dropdownVals, setDropdownVals] = useState(["Item1"]); //in order to get the values from using this component we need to track values from the parent
  
  /**
   * Helper function to generate a list input for the dropdown
   * @param {*} length 
   */
  function generateList(length) {
    let list = [];
    for (let i = 1; i < length; i++) {
      list.push("Item"+i);
    }
    return list;
  }

  return (
    <div className="App">
      <h1>Dropdown Component</h1>
      <Dropdown options={generateList(50)} value={dropdownVals} onChangeValue={setDropdownVals}></Dropdown>
    </div>
  );
}

export default App;
