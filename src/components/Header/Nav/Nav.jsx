import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { langContext } from '../../../context';

import './Nav.css';

import esImage from '../../../img/spain.png';
import enImage from '../../../img/united-kingdom.png';
import ImgModeDark from '../../../img/moon.svg';
import ImgModeLight from '../../../img/sunny.svg';

/**
 * Create a React functional component
 * Component states (Delegated state) [langContext]
 * @returns JSX DOM
 */
const Nav = ({ darkMode, onNewDarkMode }) => {
  const idioma = useContext(langContext);

  return (
    <nav className="nav nav-bar d-flex aling-items--center justify-content--center w-100">
      <div className="nav-bar__logo">
        <p className="nav-bar__brand">
          <Link className="text-dark" to="/threetwicesix/">
            <FormattedMessage
              id="menu.brand"
              defaultMessage="VoidToInfinite"
            />
          </Link>
        </p>
      </div>
      <div className="nav-bar__list">
        <ul className="nav-bar__list">
          <li className="nav-bar__item--theme">
            <button
              type="button"
              onMouseDown={() => {
                document.body.classList.toggle('dark-theme');
                if (document.body.classList.contains('dark-theme')) {
                  onNewDarkMode((v) => !v);
                } else {
                  onNewDarkMode(false);
                }
              }}
            >
              <img src={darkMode ? ImgModeDark : ImgModeLight} alt="" />
            </button>
          </li>
        </ul>
      </div>
      <div className="nav-bar__lang">
        <button
          type="button"
          onMouseDown={() => {
            idioma.setLang('en-US');
          }}
          className={classNames({
            'nav-bar__lang--active': idioma.locale === 'es-ES',
            'nav-bar__lang--unactive': idioma.locale === 'en-US',
          })}
        >
          <img src={esImage} alt="" />
        </button>
        <button
          type="button"
          onMouseDown={() => {
            idioma.setLang('es-ES');
          }}
          className={classNames({
            'nav-bar__lang--active': idioma.locale === 'en-US',
            'nav-bar__lang--unactive': idioma.locale === 'es-ES',
          })}
        >
          <img src={enImage} alt="" />
        </button>
      </div>
    </nav>
  );
};
/**
 * Define propTypes types of attributes
 */
Nav.propTypes = {
  darkMode: PropTypes.bool,
  onNewDarkMode: PropTypes.func,
};
/**
 * Define propTypes default value for attributes
 */
Nav.defaultProps = {
  darkMode: false,
  onNewDarkMode: () => {},
};
/**
 * export Nav component by default
 */
export default Nav;
