import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import { LangProvider } from './context';

ReactDOM.render(
  <LangProvider>
    <Router />
  </LangProvider>,
  document.getElementById('root'),
);
