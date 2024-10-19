import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CharacterDetails = () => {
  const location = useLocation();
  const { episode } = location.state;
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const characterUrls = episode.characters;

    const fetchCharacters = async () => {
      const characterData = await Promise.all(
        characterUrls.map((url) => fetch(url).then((response) => response.json()))
      );
      setCharacters(characterData);
    };

    fetchCharacters();
  }, [episode]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{episode.name} - Characters</h2>
      <div className="grid grid-cols-3 gap-6">
        {characters.map((character) => (
          <div key={character.id} className="bg-white shadow-md p-4 rounded-lg">
            <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">{character.name}</h3>
            <p>{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterDetails;
