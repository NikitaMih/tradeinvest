import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  userData: {},
  email: '',
  phone: '',
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    SetUserData: (state, action) => {
        state.userData = action.payload;
    },
    SetEmail: (state, action) => {
        state.email = action.payload;
    },
    SetPhone: (state, action) => {
      state.phone = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SetUserData, SetEmail, SetPhone } = profileSlice.actions;

// Selectors
export const selectUserData = (state) => state.profile.userData;
export const selectEmail = (state) => state.profile.email;
export const selectPhone = (state) => state.profile.phone;

// Thunk actions 
export const GetProfileData = (login) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`http://localhost:3001/profile?login=${login}`);
            dispatch(SetUserData(res.data[0]))
            dispatch(SetEmail(res.data[0].email));
            dispatch(SetPhone(res.data[0].phone));
        } catch {
            console.log("err");
        }
    }
};

export const PostProfileData = async (login, data) => {
    try{
        await axios.put(`http://localhost:3001/profile/${login}`,data)
    } catch {
        console.log("err");
    }
    
};

export default profileSlice.reducer;