import './App.css';
import LiveStream from './components/Live';
import Titulo from './components/Titulo';
import footer from './components/Footer';

function App() {

  const videoId = '8ZOZHthVXM8';

  return (
    <div className="App">
      <Titulo />
      <LiveStream videoId={videoId} />
      <footer />
    </div>
  );
}

export default App;
