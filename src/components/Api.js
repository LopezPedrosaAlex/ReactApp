import axios from "axios";

const getGames = async (state) => {
  const response = await axios.get(
    "https://api.rawg.io/api/games?key=72a7e613decc414e94234045d15726e5"
  );
  state(response.data.results);
  console.log("results: ", response.data.results);
};

const getDetailGame = async (id, state) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=72a7e613decc414e94234045d15726e5`
  );
  state(response.data);
};

export { getGames, getDetailGame };
