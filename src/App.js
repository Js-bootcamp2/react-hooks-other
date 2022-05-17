import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import ParentTwo from './components/ParentTwo';
import ParentThree from './components/ParentThree';

function App() {
  return (
    <div className="App">
      <Parent />
      <hr/>
      <ParentTwo />
      <hr/>
      <ParentThree />
    </div>
  );
}

export default App;
