import React, { useState } from 'react';
import Nav from './Nav/Nav';
import Presentation from './Presentation/Presentation';
import NavMobile from './NavMobile/NavMobile';

import './Header.css';

/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const Header = () => {
  const [actualDarkMode, setDarkMode] = useState(false);
  return (
    <header className="hero d-flex">
      <Nav darkMode={actualDarkMode} onNewDarkMode={setDarkMode} />
      <Presentation />
      <NavMobile darkMode={actualDarkMode} onNewDarkMode={setDarkMode} />
    </header>
  );
};
/**
 * export App component by default
 */
export default Header;
