import logo from './company-banner.png';
import underConstruction from './under-construction.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="loadingContainer">
        <div className="spinner"/>
      </div>
      <img src={underConstruction} className="underConstruction" alt="updating" />
    </div>
  );
}

export default App;
