import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './styles.css';

const LiveVideo = () => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    // Substitua 'SUA_CHAVE_DE_API' pela chave de API do YouTube que você obteve
    const apiKey = 'AIzaSyC3ZBD4GIp-tH7EUMrTC7XY0IGo4M0fnwo';

    // Substitua 'ID_DO_CANAL' pelo ID do canal que hospeda a live
    const channelId = 'UCpko7XrFeOx6UD53d6G7bFQ';

    // Faz uma solicitação à API do YouTube para obter os detalhes da live mais recente do canal
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&eventType=live&type=video`)
      .then((response) => {
        if (response.data.items.length > 0) {
          const liveVideoId = response.data.items[0].id.videoId;
          setVideoId(liveVideoId);
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar a live do YouTube:', error);
      });
  }, []);

  return (
    <div>
      {videoId && (
        <YouTube
          videoId={videoId}
          opts={{
            width: '800',
            height: '450',
          }}
        />
      )}
    </div>
  );
};

export default LiveVideo;
