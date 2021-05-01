import React, { useState } from 'react';

import './Calendar.css';
import SelectorMes from './SelectorMes/SelectorMes';
import Grid from './Grid/Grid';

import CardsJSON from './cards.json';
/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const Calendar = () => {
  let InitialCards = CardsJSON.Cards;
  const [actualCards, setNewActualCards] = useState(InitialCards);
  return (
    <div className="calendar d-flex">
      <SelectorMes onNewCards={ cards => setNewActualCards(cards)} />
      <Grid cardList={actualCards} />
    </div>
  );
};
/**
 * export App component by default
 */
export default Calendar;
