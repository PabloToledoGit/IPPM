import './App.css';
import LiveStream from './components/Live';
import Titulo from './components/Titulo';
import footer from './components/Footer';

function App() {

  const videoId = 'ab1HLjM0aII';

  return (
    <div className="App">
      <Titulo />
      <LiveStream videoId={videoId} />
      <footer />
    </div>
  );
}

export default App;
