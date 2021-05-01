import React from 'react';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import Footer from '../components/Footer';

import './App.css';

/**
 * Create a React functional component
 * Component states (Delegated state)
 * @returns JSX DOM
 */
const App = () => (
  <div className="container d-grid">
    <Header />
    <Calendar />
    <Footer />
  </div>
);
/**
 * export App component by default
 */
export default App;
