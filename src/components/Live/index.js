import React from "react";
import YouTube from "react-youtube";
import "./index.css";

const LiveStream = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // Configurações opcionais, como autoplay e controles de reprodução
    },
    
  };

  return (
    <div className="d-flex justify-content-center align-itens-center mt-5">
      <div className="live">
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default LiveStream;
