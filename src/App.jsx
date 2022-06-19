import { useState } from "react";
import Games from "./components/Games";
import DetailGames from "./components/DetailGames";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games></Games>}></Route>
          <Route
            path="/games/:Id"
            element={<DetailGames></DetailGames>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
