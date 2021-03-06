import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {

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
      <Dropdown selectedItems ={[]} listItems={generateList(50)}></Dropdown>
    </div>
  );
}

export default App;
