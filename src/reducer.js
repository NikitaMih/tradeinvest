const reducer = (store = { login: '' , balance: 0}, action) => {
    if(action.type =='SAVE_LOGIN'){
        return{
            ...store,
            login: action.payload,
        }
    }
    if(action.type =='SAVE_BALANCE'){
        return{
            ...store,
            balance: action.payload,
        }
    }
    return store;
}

export default reducer;