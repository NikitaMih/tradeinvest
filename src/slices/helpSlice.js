import axios from 'axios';

// Thunk actions 
export const SendMessage = (message) => {
  return async (dispatch) => {
    try{
      await axios.post(`http://localhost:3001/help`, message);
    } catch {
      console.log('err');
    }
  }
};