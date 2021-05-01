/**
 * import necessary libraries
 */
import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import { FormattedDate } from 'react-intl';

import InitialCards from './../cards.json';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const checkNewMonth = index => {
  let newMonth;
  if (index > (monthNames.length - 1)) {
    newMonth = monthNames[0];
  } else if (index < 0 ) { 
    newMonth = monthNames[monthNames.length + index];
  } else {
    newMonth = monthNames[index];
  }
  return newMonth;
};

const filterCardsByMonth = monthName => {
  return InitialCards.Cards.filter(( card ) => {
    let dateNew = new Date(`'${monthNames.indexOf(monthName) + 1}'`);
    let dateCard = new Date(card.Date);
    return dateNew.getMonth() == dateCard.getMonth();
  });
};
/**
* Create a React functional component with prop-types
* Component as stateless presentational component with callback 'onNewMonth'
* @returns JSX DOM
*/
const SelectorMes = ({ onNewCards }) => {
  const [actualMonth, setActualMonth] = useState('January');
  useEffect(() => {
    onNewCards(filterCardsByMonth(checkNewMonth(monthNames.indexOf(actualMonth))))
  }, []);
  return (
    <div className="calendar__selector d-flex w-100">
      <div 
        className="calendar__leftArrow soft-shadow"
        onClick={() => {
          setActualMonth(checkNewMonth(monthNames.indexOf(actualMonth) - 1))
          onNewCards(filterCardsByMonth(checkNewMonth(monthNames.indexOf(actualMonth) - 1)))
        }}
      ></div>
      <div className="calendar__month">
        <p>
          <FormattedDate 
            value={new Date(`${monthNames.indexOf(actualMonth) + 1}`)}
            month="long"
          />
        </p>
      </div>
      <div 
        className="calendar__rightArrow soft-shadow"
        onClick={() => {
          setActualMonth(checkNewMonth(monthNames.indexOf(actualMonth) + 1))
          onNewCards(filterCardsByMonth(checkNewMonth(monthNames.indexOf(actualMonth) + 1)))
        }}
      ></div>
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
