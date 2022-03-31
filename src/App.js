import './App.css';

import Timer from './components/Timer';
import Weeks from './components/Weeks';

function App() {

  return (
    <div className="App">
      <div className="App-body">
        <h1>Baby On The Way!</h1>
        <p>Estimated Due Date: 10/28/2022</p>
        <Weeks />
        <Timer date="10/28/2022" />
      </div>
    </div>
  );
}

export default App;
