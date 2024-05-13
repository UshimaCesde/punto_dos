import React, { useState, useEffect } from "react";
import CountContext from "./CountContext";
import EjemploComponente from "./EjemploComponente";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Haz clic ${count} veces`;
  });

  return (
    <CountContext.Provider value={count}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p>Haz hecho click {count} veces</p>
        <button onClick={() => setCount(count + 1)}>Haz clic aquí</button>
        <EjemploComponente />
      </div>
    </CountContext.Provider>
  );
}
export default App;
