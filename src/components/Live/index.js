import React from 'react';
import YouTube from 'react-youtube';
import './index.css'

const LiveStream = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // Configurações opcionais, como autoplay e controles de reprodução
    },
  };

  return (
    <div>
      <YouTube className="live" videoId={videoId} opts={opts} />
    </div>
  );
};

export default LiveStream;
