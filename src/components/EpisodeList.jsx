import React from 'react';
import { useNavigate } from 'react-router-dom';

const EpisodeList = ({ episodes }) => {
  const navigate = useNavigate();

  const handleViewCharacters = (episode) => {
    navigate(`/characters/${episode.id}`, { state: { episode } });
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-6 overflow-y-auto flex-grow">
      {episodes.map((episode) => (
        <div key={episode.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">{episode.name}</h2>
          <p className="text-gray-500">{episode.episode}</p>
          <button
            onClick={() => handleViewCharacters(episode)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View Characters
          </button>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
