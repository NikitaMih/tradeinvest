import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer';
import Navigation from './components/navigation';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

