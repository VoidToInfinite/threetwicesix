import React, { useContext } from 'react';
import { langContext } from './../../../context/langContext';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './NavMobile.css';

import ImgHomeDark from './../../../img/home-dark.svg';
import ImgHomeLight from './../../../img/home-light.svg';
import ImgModeDark from './../../../img/moon.svg';
import ImgModeLight from './../../../img/sunny.svg';
import esImage from './../../../img/spain.png';
import enImage from './../../../img/united-kingdom.png';

/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const NavMobile = ({ darkMode, onNewDarkMode }) => {

  const idioma = useContext(langContext);

  return (
    <div className="nav-mobile d-none">
      <div className="nav-mobile__item nav-mobile__item--home">
        <img 
          src={darkMode ? ImgHomeLight : ImgHomeDark}
          alt=""
          onClick={() => { 
            window.scrollTo({
                top: 0
            });
          }}
          />
      </div>
      <div className="nav-mobile__item nav-mobile__item--theme">
        <img 
          src={darkMode ? ImgModeDark : ImgModeLight}
          alt=""
          onClick={() => { 
            document.body.classList.toggle('dark-theme');
            if (document.body.classList.contains('dark-theme')) {
              onNewDarkMode(v => !v)
            } else {
              onNewDarkMode(false)
            }
          }}/>
      </div>
      <div className="nav-mobile__item nav-mobile__lang">
        <button
          onClick={() => idioma.setLang('en-US')}
          className={classNames({
            'nav-mobile__lang--active': idioma.locale === 'es-ES',
            'nav-mobile__lang--unactive': idioma.locale === 'en-US',
          })}
        >
          <img src={esImage} alt=""/>
        </button>
				<button
          onClick={() => idioma.setLang('es-ES')}
          className={classNames({
            'nav-mobile__lang--active': idioma.locale === 'en-US',
            'nav-mobile__lang--unactive': idioma.locale === 'es-ES',
          })}
        >
          <img src={enImage} alt=""/>
        </button>
      </div>
    </div>
  );
};
/**
 * Define propTypes types of attributes
 */
NavMobile.propTypes = {
  darkMode: PropTypes.bool,
  onNewDarkMode: PropTypes.func,
};
/**
 * Define propTypes default value for attributes
 */
NavMobile.defaultProps = {
  darkMode: false,
  onNewDarkMode: () => {},
};
/**
 * export NavMobile component by default
 */
export default NavMobile;
