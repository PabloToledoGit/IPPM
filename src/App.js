import "./App.css";
import LiveStream from "./components/Live";
import Titulo from "./components/Titulo";

function App() {
  const videoId = "8ZOZHthVXM8";

  return (
    <div className="App">
      <Titulo />
      <div className="d-flex justify-content-center align-itens-center mt-5">
        <div className="border border-white">
          <LiveStream videoId={videoId} />
        </div>
      </div>
    </div>
  );
}

export default App;
