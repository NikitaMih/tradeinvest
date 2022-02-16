import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';
import portfolioSlice from './slices/portfolioSlice'
import walletReducer from './slices/walletSlice';
import tradeReducer from './slices/tradeSlice';
import profileReducer from './slices/profileSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    portfolio: portfolioSlice,
    trade: tradeReducer,
    wallet: walletReducer,
    profile: profileReducer,
  }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);