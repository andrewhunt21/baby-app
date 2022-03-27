import './App.css';

import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baby On The Way!</h1>
        <p>Estimated Due Date: 10/28/2022</p>
        <Timer date="10/28/2022" />
      </header>
    </div>
  );
}

export default App;
