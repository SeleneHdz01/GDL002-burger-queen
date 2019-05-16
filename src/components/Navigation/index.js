import React from "react";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => {
  return (
    <nav className="main-menu">
      <ul className="flex-row">
        <li>
          <Link to={ROUTES.HOME}>Inicio</Link>
        </li>
        <li>
          <Link to={ROUTES.KITCHEN}>Cocina</Link>
        </li>
        <li>
          <Link to={ROUTES.ORDER}>Orden</Link>
        </li>
        <li>
          <Link to={ROUTES.SENT}>Terminado</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;