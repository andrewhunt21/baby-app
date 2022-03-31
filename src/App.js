import './App.css';

import Timer from './components/Timer';
import Weeks from './components/Weeks';

function App() {

  return (
    <div className="App">

      <div className="App-body">

        <div className='top-card'>
          <div className='container'>
            <h1>Baby Updates!</h1>
          </div>
        </div>

        <div className='info-section'>
          <div className='info-card'>
            <div className='container'>
              <p>Estimated Due Date: 10/28/2022</p>
            </div>
          </div>

          <div className='info-card'>
            <div className='container'>
              <Weeks />
            </div>
          </div>

          <div className='info-card'>
            <div className='container'>
              <Timer date="10/28/2022" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
