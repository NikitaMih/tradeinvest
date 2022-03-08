import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginReducer from './slices/loginSlice';
import portfolioSlice from './slices/portfolioSlice'
import walletReducer from './slices/walletSlice';
import tradeReducer from './slices/tradeSlice';
import profileReducer from './slices/profileSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  portfolio: portfolioSlice,
  trade: tradeReducer,
  wallet: walletReducer,
  profile: profileReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persister = persistStore(store);

export default store;