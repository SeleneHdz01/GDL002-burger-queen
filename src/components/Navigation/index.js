import React from "react";
import { Link } from "react-router-dom"; //importando un componente

const Navigation = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">Inicio</Link>
      <Link to="/order">Orden</Link>
      <Link to="/kitchen">Cocina</Link>
    </nav>
  );
};

export default Navigation;
