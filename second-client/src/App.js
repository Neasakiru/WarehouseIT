import { useState, useEffect } from "react";
import Tile from "./components/tile";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7163/api/Magazyn")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      {data.map((e) => (
        <Tile item={e} key={e.id} />
      ))}
    </div>
  );
}

export default App;
