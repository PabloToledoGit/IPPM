import "./App.css";
import LiveStream from "./components/Live";
import Titulo from "./components/Titulo";
import Menu from "./components/Link"
import TituloPagina from "./components/TituloPagina";


function App() {
  const videoId = "8ZOZHthVXM8";

  return (
    <div className="App">
      <div className="d-flex bg-dark justify-content-between">
        <TituloPagina titulo="Profetizando Milagres" />
        <div className="divlinks">
          <Menu menu="Voltar" links="https://ippmsite.vercel.app/" />
        </div>
      </div>
      <Titulo titulo="Profetizando Milagres" />
      <LiveStream videoId={videoId} />
    </div>
  );
}

export default App;
