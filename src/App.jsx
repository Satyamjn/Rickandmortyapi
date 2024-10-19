import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import CharacterFeed from './components/CharacterFeed';
import CharacterDetails from './components/CharacterDetails';

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode')
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results));
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/5 bg-gray-900 text-white p-4">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">App Navigation</h1>
            <ul className="space-y-3">
              <li className="hover:bg-gray-700 p-2 rounded">Home</li>
              <li className="hover:bg-gray-700 p-2 rounded">Episodes</li>
              <li className="hover:bg-gray-700 p-2 rounded">Characters</li>
              <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-grow">
          <Routes>
            {/* Episode List Route */}
            <Route path="/" element={<EpisodeList episodes={episodes} />} />
            
            {/* Character Details Route */}
            <Route path="/characters/:episodeId" element={<CharacterDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
