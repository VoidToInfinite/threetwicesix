import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from 'react-intl';

import './Card.css';

/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const Card = ({ Number, Content, Date }) => (
  <div className="card d-flex">
    <div className="card__title">
      <h2>
        <FormattedMessage
          id="card.index"
          defaultMessage="00"
          values={
                {
                  number: Number,
                }
              }
        />
      </h2>
    </div>
    <div className="card__text">
      <p>
        {Content.replace(/\u00a0/g, ' ')}
      </p>
    </div>
    <div className="card__date">
      <p>
        <FormattedDate
          value={Date}
          year="numeric"
          month="short"
          day="2-digit"
        />
      </p>
    </div>
  </div>
);
/**
 * Define propTypes types of attributes
 */
Card.propTypes = {
  Number: PropTypes.string,
  Content: PropTypes.string,
  Date: PropTypes.string,
};
/**
 * Define propTypes default value for attributes
 */
Card.defaultProps = {
  Number: '',
  Content: '',
  Date: '',
};
/**
 * export App component by default
 */
export default Card;
