import React, { useContext } from "react";
import CountContext from "./CountContext";

function EjemploComponente() {
  const count = useContext(CountContext);

  return (
    <div>
      <p>El valor del contexto es {count}</p>
    </div>
  );
}

export default EjemploComponente;
