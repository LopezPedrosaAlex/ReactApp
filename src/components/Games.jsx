import React, { useEffect, useState } from "react";
import { getGames } from "./Api";
import "../styles/Games.css";

const Games = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
    getGames(setGames);
  }, []);

  return (
    <>
      {games != null
        ? games.map((game) => (
            <div key={game.id}>
              <a className="gameTitle" href={`/games/${game.id}`}>
                {game.slug}
              </a>
              <img className="gameImg" src={game.background_image}></img>
            </div>
          ))
        : "There is no data"}
    </>
  );
};

export default Games;
