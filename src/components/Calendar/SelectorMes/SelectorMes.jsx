/**
 * import necessary libraries
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

import InitialCards from '../cards.json';

const monthNames = () => ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
* Create a React functional component with prop-types
* Component as stateless presentational component with callback 'onNewMonth'
* @returns JSX DOM
*/
const SelectorMes = ({ onNewCards }) => {
  const [actualMonthNames] = useState(monthNames());
  const [actualMonth, setActualMonth] = useState('January');

  const checkNewMonth = (index) => {
    let newMonth;
    if (index > (actualMonthNames.length - 1)) {
      newMonth = 'January';
    } else if (index < 0) {
      newMonth = actualMonthNames[actualMonthNames.length + index];
    } else {
      newMonth = actualMonthNames[index];
    }
    return newMonth;
  };

  const filterCardsByMonth = (monthName) => InitialCards.Cards.filter((card) => {
    const dateNew = new Date(`'${actualMonthNames.indexOf(monthName) + 1}'`);
    const dateCard = new Date(card.Date);
    return dateNew.getMonth() === dateCard.getMonth();
  });

  useEffect(() => {
    onNewCards(filterCardsByMonth(checkNewMonth(actualMonthNames.indexOf(actualMonth))));
  }, []);
  return (
    <div className="calendar__selector d-flex w-100">
      <div
        className="calendar__leftArrow soft-shadow"
        aria-label="Preview Month"
        onMouseDown={() => {
          setActualMonth(checkNewMonth(actualMonthNames.indexOf(actualMonth) - 1));
          onNewCards(filterCardsByMonth(checkNewMonth(actualMonthNames.indexOf(actualMonth) - 1)));
        }}
        role="button"
        tabIndex="0"
      />
      <div className="calendar__month">
        <p>
          <FormattedDate
            value={new Date(`${actualMonthNames.indexOf(actualMonth) + 1}`)}
            month="long"
          />
        </p>
      </div>
      <div
        className="calendar__rightArrow soft-shadow"
        aria-label="Next Month"
        onMouseDown={() => {
          setActualMonth(checkNewMonth(actualMonthNames.indexOf(actualMonth) + 1));
          onNewCards(filterCardsByMonth(checkNewMonth(actualMonthNames.indexOf(actualMonth) + 1)));
        }}
        role="button"
        tabIndex="0"
      />
    </div>
  );
};
/**
* Define propTypes types of attributes
*/
SelectorMes.propTypes = {
  onNewCards: PropTypes.func,
};
/**
* Define propTypes default value for attributes
*/
SelectorMes.defaultProps = {
  onNewCards: () => {},
};
/**
* export WishInput component by default
*/
export default SelectorMes;
