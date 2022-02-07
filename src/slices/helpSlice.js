import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  login: "",
  password: "",
  error: false,
  history: "",
  showLogin: false,
}

export const helpSlice = createSlice({
  name: 'help',
  initialState,
  reducers: {
    SetLogin: (state, action) => {
        state.login = action.payload;
    },
    SetPassword: (state, action) => {
        state.password = action.payload;
    },
    SetError: (state, action) => {
      state.error = action.payload;
    },
    SetHistory: (state) => {
      state.history = '/account/trade/cryptocurrency';
    },
    SetShowLogin: (state, action) =>{
      state.showLogin = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SetLogin, SetPassword, SetError, SetHistory, SetShowLogin } = helpSlice.actions;

// Selectors
export const selectLogin = (state) => state.login.login;
export const selectPassword = (state) => state.login.password;
export const selectError = (state) => state.login.error;
export const selectHistory = (state) => state.login.history;
export const selectShowLogin = (state) => state.login.showLogin;

// Thunk actions 
export const sendMessage = (message) => {
  return async (dispatch) => {
    try{
      const res = await axios.post(`http://localhost:3001/profile?login=${login}`,{
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        });
      password === res.data[0].password && dispatch(SetHistory());
    } catch {
      dispatch(SetError(true));
    }
  }
};

export default helpSlice.reducer;