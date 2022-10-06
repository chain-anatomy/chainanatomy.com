import underConstruction from './under-construction.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay muted width="82%">
        <source type="video/webm" src="/logo.webm"/>
      </video>
      <div className="loadingContainer">
        <div className="spinner"/>
      </div>
      <img src={underConstruction} className="underConstruction" alt="updating" />
    </div>
  );
}

export default App;
