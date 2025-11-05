import {LOGIN_FAILURE,LOGIN_SUCCESS} from './actions';

const initialState = {
    //token:token ? true :flase
};

export const authoReducer = (state = initialState,{payload ,type})=>{
    switch (type){
        case LOGIN_SUCCESS:
            return{};

            default:
                return state;

    }
}