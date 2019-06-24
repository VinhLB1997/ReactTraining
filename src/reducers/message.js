import * as Message from "../constants/Messages"
import * as types from '../constants/ActionType'

var initialState = Message.WELLCOM_BUY_PRODUCT

const message = (state = initialState, action) =>{
    switch(action.type){
        case types.CHANGE_MESSAGE:
            state = action.message
            return state;
        default: return state;
    }
}

export default message;