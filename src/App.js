import './App.css';
import PureComponent from './Components/PureComponent'
import HocMain from './Components/Hoc';
function App() {
  return (
    <div className="App">
      <h2>Here is example of Pure component and Higher order Component</h2>
      <PureComponent/>
      <HocMain/>
    </div>
  );
}

export default App;
