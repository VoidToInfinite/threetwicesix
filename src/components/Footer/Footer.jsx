import React from 'react';
import { FormattedMessage } from 'react-intl';

import './Footer.css';
import ImgDefault from './../../img/vtilogo.svg'
import ImgLinkedin from './../../img/linkedin.svg'
import ImgInstagram from './../../img/instagram.svg'
import ImgGithub from './../../img/github.svg'
import ImgDiscord from './../../img/discord.svg'

/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const Footer = () => {
  return (
    <footer className="footer d-flex">
      <div className="footer__social">
      <div className="footer__social__item soft-shadow">
          <a href="https://www.linkedin.com/in/demosquerag/" target="_blank" rel="noopener noreferrer">
              <picture>
                  <source srcSet={ImgDefault} type="image/svg"/>
                  <img src={ImgLinkedin} alt="Logo de Linkedin" title="Linkedin"/>
              </picture>
          </a>
        </div>
        <div className="footer__social__item soft-shadow">
          <a href="https://www.instagram.com/demosquerag/" target="_blank" rel="noopener noreferrer">
              <picture>
                  <source srcSet={ImgDefault} type="image/svg"/>
                  <img src={ImgInstagram} alt="Logo de Instagram" title="Instagram"/>
              </picture>
          </a>
        </div>
        <div className="footer__social__item soft-shadow">
          <a href="https://github.com/VoidToInfinite" target="_blank" rel="noopener noreferrer">
              <picture>
                  <source srcSet={ImgDefault} type="image/svg"/>
                  <img src={ImgGithub} alt="Logo de GitHub" title="GitHub"/>
              </picture>
          </a>
        </div>
        <div className="footer__social__item soft-shadow">
          <a href="https://discord.gg/CuGhqdG3g3" target="_blank" rel="noopener noreferrer">
              <picture>
                  <source srcSet={ImgDefault} type="image/svg"/>
                  <img src={ImgDiscord} alt="Logo de Discord" title="Discord"/>
              </picture>
          </a>
        </div>
      </div>
      <div className="footer__copy">
        <p>
          <FormattedMessage
            id="footer.copy"
            defaultMessage="2021"
            values={{ name: "Daniel Mosquera" }}
          />
        </p>
      </div>
    </footer>
  );
};
/**
 * export App component by default
 */
export default Footer;
