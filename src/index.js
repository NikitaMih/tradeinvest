import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.scss';
import { store } from './store';
import Navigation from './navigation';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

