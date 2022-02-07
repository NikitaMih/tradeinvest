import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    SetUserData: (state, action) => {
        state.userData = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SetUserData } = portfolioSlice.actions;

// Selectors
export const selectUserData = (state) => state.portfolio.userData;

// Thunk actions 
export const getUserData = (login) => {
  return async (dispatch) => {
    try{
      const res = await axios.get(`http://localhost:3001/profile?login=${login}`);
      dispatch(SetUserData(res.data[0]));
    } catch {
      console.log('err');;
    }
  }
}

export default portfolioSlice.reducer;