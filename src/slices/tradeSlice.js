import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../config/js';

const initialState = {
    userData: {},
    cardName: '',
    cardRate: 0,
    typeTrade: '',
    changeCurrency: '',
    referenceCurrency: '',
    newData: {},
    showTradeWindow: false,
    history: 'cryptocurrency',
}

export const tradeSlice = createSlice({
  name: 'trade',
  initialState,
  reducers: {
    SetUserData: (state, action) => {
        state.userData = action.payload;
    },
    SetCardName: (state, action) => {
        state.cardName = action.payload;
    },
    SetCardRate: (state, action) => {
        state.cardRate = action.payload;
    },
    SetTypeTrade: (state, action) => {
        state.typeTrade = action.payload;
    },
    SetChangeCurrency: (state, action) => {
        state.changeCurrency = action.payload;
    },
    SetReferenceCurrency: (state, action) => {
        state.referenceCurrency = action.payload;
    },
    SetNewData: (state, action) => {
        state.newData = action.payload;
    },
    SetShowTradeWindow: (state, action) => {
        state.showTradeWindow = action.payload;
    },
    SetHistory: (state, action) => {
        state.history = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    SetUserData, 
    SetCardName, 
    SetCardRate, 
    SetTypeTrade,
    SetChangeCurrency,
    SetReferenceCurrency, 
    SetShowTradeWindow,
    SetHistory } = tradeSlice.actions;

// Selectors
export const selectUserData = (state) => state.trade.userData;
export const selectCardName = (state) => state.trade.cardName;
export const selectCardRate = (state) => state.trade.cardRate;
export const selectTypeTrade = (state) => state.trade.typeTrade;
export const selectChangeCurrency = (state) => state.trade.changeCurrency;
export const selectReferenceCurrency = (state) => state.trade.referenceCurrency;
export const selectNewData = (state) => state.trade.newData;
export const selectShowTradeWindow = (state) => state.trade.showTradeWindow;
export const selectHistory = (state) => state.trade.history;


// Thunk actions 
export const getUserData = (login) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(baseUrl + `/profile?login=${login}`);
            dispatch(SetUserData((res.data[0])));
        }catch{
            console.log("get err");
        }
    }
}

export const postUserData = (login, data) => {
    return async () => {
        await fetch(baseUrl + `/profile/${login}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }
};

export default tradeSlice.reducer;