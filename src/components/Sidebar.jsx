import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ episodes }) => {
  const navigate = useNavigate();

  const handleEpisodeClick = (episode) => {
    navigate(`/characters/${episode.id}`, { state: { episode } });
  };

  return (
    <div className="w-1/5 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Episodes</h2>
      <ul className="space-y-3">
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => handleEpisodeClick(episode)}
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            {episode.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
