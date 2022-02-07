import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import portfolioSlice from './slices/portfolioSlice'
import walletReducer from './slices/walletSlice';
import tradeReducer from './slices/tradeSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    portfolio: portfolioSlice,
    trade: tradeReducer,
    wallet: walletReducer,
  }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);