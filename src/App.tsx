import { useState } from "react";
import "./App.css";
import Stage from "./components/Stage";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>X~P(lore)</h1>
      <Stage user_id={1} />
    </>
  );
}

export default App;
