import './App.css';
import EnvironmentsGrid from './EnvironmentsGrid';
import Playlist from './Playlist';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1 className="h2 m-4">Environments</h1>
          </div>
          <div className="col-4">
            <h1 className="h2 m-4">Music</h1>
          </div>
        </div>
        
        <div className="row">
            <div className="col-8">
              <EnvironmentsGrid />
            </div>
            <div className="col-4">
              <Playlist />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
