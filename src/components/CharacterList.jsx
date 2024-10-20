import { useState, useEffect } from "react";
import { Character } from "./Character";

// function NavPage({ page, setPage }) {
//   return (
//     <header className="d-flex justify-content-between align-items-center">
//       <p>Page: {page}</p>

//       <button
//         className="btn btn-primary btn-sm"
//         onClick={() => setPage(page + 1)}
//       >
//         Page {page + 1}
//       </button>
//     </header>
//   );
// }

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [episode,setepisode]=useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page`
      );
     const { results } = await data.json();
     console.log(results);
      setCharacters(results);
      setLoading(false);
    }
   
    fetchData();

  }, []);
 

  const [selectedCharacter, setSelectedCharacter] = useState(null);

 
    function fn(character) {
   
      setSelectedCharacter(prev => (prev === character ? null : character));
    }
 

    
  return (
    <div className="">
      {/* <NavPage page={page} setPage={setPage} /> */}
      
    <div className="flex w-screen ">
      <div className="w-60 m-3 p-4 border border-red-900"> 
        <h1 className="font-bold text-lg underline">Episode</h1>
        <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <a onClick={() => fn(character)}>
              {character.name}
            </a>
            {selectedCharacter ===character &&(
              <div>
              
                {character.episode.map((episodeUrl) => {
                  const episodeId = episodeUrl.split('/').pop(); // Extract episode ID
                  console.log(episode);
                  return (
                    <div key={episodeId}>
                      <a href={episodeUrl} target="_blank" rel="noopener noreferrer">
                        Episode {episodeId}
                      </a>
                    </div>
                  );
                })}
              </div>
            )}
          </li>
        ))}
      </ul>


       
      </div>
    {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap">
          {characters.map((character) => (
            <div className="col-md-3" key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}
    </div>
    

      {/* <NavPage page={page} setPage={setPage} /> */}
    </div>
  );
}

export default CharacterList;