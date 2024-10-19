import React from 'react';

const CharacterFeed = ({ characters }) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Characters</h2>
      <div className="grid grid-cols-3 gap-6">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-blue p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-4 text-xl font-medium">{character.name}</h3>
            <p className="text-gray-500">{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterFeed;
