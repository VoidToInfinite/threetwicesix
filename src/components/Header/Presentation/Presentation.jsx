import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Presentation.css';

/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const Presentation = () => { 
  return (
    <div className="hero-presentation d-flex">
      <div className="hero-presentation__title">
        <p>
          366
          <br/>
          <span>
            <FormattedMessage
            id="presentation.title"
            defaultMessage="dias"
            />
          </span>
        </p>
      </div>
      <div className="hero-presentation__subtitle">
        <h1>
          <FormattedMessage
            id="presentation.subtitle"
            defaultMessage="¡Hola!, soy"
          />
          <span> Daniel</span>Mosquera
        </h1>
        <p className="hero-presentation__text">
          <FormattedMessage
            id="presentation.text"
            defaultMessage="Desarrollador web junior perteneciente al equipo de VoidToInfinite Project"
          />
        </p>
      </div>
    </div>
  );
};

export default Presentation;
