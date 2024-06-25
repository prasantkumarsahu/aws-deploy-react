import './App.css';
import pic from './pic-1.jpg';

function App() {
  // const img1 = pic;
  return (
    <div className="App">
      <header className="App-header">
        <h3>I ❤ U Monalisa!</h3>
        <img src={pic} alt="pic"></img>
      </header>
    </div>
  );
}

export default App;
