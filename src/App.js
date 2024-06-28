import './App.css';
import pic from './pic-1.jpg';
import { useState } from 'react';

function App() {

  const [accept, setAccept] = useState();

  let header;
  if (accept === true) {
    header = <h3>I <span>❤</span> U Too Prasant!</h3>;
  } else if (accept === false) {
    header = <h3>💔</h3>;
  } else {
    header = "";
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>I <span>❤</span> U Monalisa!</h3>
        <img src={pic} alt="pic"></img>
        <div className="buttons">
          <button type="button" className="button-1" onClick={() => setAccept(true)}>Accept</button>
          <button type="button" className="button-2" onClick={() => setAccept(false)}>Cancel</button>
        </div>
        {header}
      </header>
    </div>
  );
}

export default App;
