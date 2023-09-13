import "./App.css";
import LiveStream from "./components/Live";
import Titulo from "./components/Titulo";

function App() {
  const videoId = "8ZOZHthVXM8";

  return (
    <div className="App">
      <Titulo />
      <LiveStream videoId={videoId} />
    </div>
  );
}

export default App;
