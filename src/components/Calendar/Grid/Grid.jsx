/**
 * import necessary libraries
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * import necessary components
 */
import Card from '../Card';
/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const Grid = ({ cardList }) => (
  <div className="calendar__grid d-grid w-100">
    {cardList.map(({ Number, Content, Date }) => (
      <Card
        key={Content}
        Number={Number}
        Content={Content}
        Date={Date}
      />
    ))}
  </div>
);

/**
 * Define propTypes types of attributes
 */
Grid.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.shape(
    Card.propTypes,
  )),
};
/**
 * Define propTypes default value for attributes
 */
Grid.defaultProps = {
  cardList: [],
};
/**
 * export App component by default
 */
export default Grid;
