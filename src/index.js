import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import store, { persister } from './store';
import Navigation from './navigation/navigator';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Navigation />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

