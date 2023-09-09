import './App.css';
import LiveVideo from './components/Live';
import Titulo from './components/Titulo';
import footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Titulo />
      <LiveVideo />
      <footer />
    </div>
  );
}

export default App;
