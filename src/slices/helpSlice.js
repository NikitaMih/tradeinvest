import axios from 'axios';
import { baseUrl } from '../config/js';

// Thunk actions 
export const SendMessage = (message) => {
  return async (dispatch) => {
    try{
      await axios.post(baseUrl + `/help`, message);
    } catch {
      console.log('err');
    }
  }
};