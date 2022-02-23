import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
  EUR: '',
  USD: '',
  RUB: ''
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    SetUserData: (state, action) => {
      state.userData = action.payload;
    },
    SetEUR: (state, action) => {
      state.EUR = action.payload;
    },
    SetUSD: (state, action) => {
      state.USD = action.payload;
    },
    SetRUB: (state, action) => {
      state.RUB = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SetUserData, SetEUR, SetUSD, SetRUB} = walletSlice.actions;

// Selectors
export const selectUserData = (state) => state.wallet.userData;
export const selectUSD = (state) => state.wallet.USD;
export const selectEUR = (state) => state.wallet.EUR;
export const selectRUB = (state) => state.wallet.RUB;

// Thunk actions 
export const getUserData = (login) =>{
  return async (dispatch) => {
    try{
      const res = await axios.get(`http://localhost:3001/profile?login=${login}`);
      dispatch(SetUserData(res.data[0]));
      dispatch(SetEUR(res.data[0].wallet.EUR));
      dispatch(SetUSD(res.data[0].wallet.USD));
      dispatch(SetRUB(res.data[0].wallet.RUB));
    }catch {
      console.log('err');;
    }
  }
};

export const PostCurrency = (login, data) => {
  return async (dispatch) => {
    try{
      await axios.put(`http://localhost:3001/profile/${login}`, data);
      dispatch(SetUserData(data));
      dispatch(SetEUR(data.wallet.EUR));
      dispatch(SetUSD(data.wallet.USD));
      dispatch(SetRUB(data.wallet.RUB));
    } catch {
      console.log('err');
    }
  }
};

export default walletSlice.reducer;