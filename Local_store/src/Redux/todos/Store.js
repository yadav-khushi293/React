import { createStore,combineReducers } from "redux";

import { todosReducer } from "../todos/Reducer";
import  {authoReducer} from "../Autho/reducer";

const rootTerminal = combineReducers({

    auth:authoReducer,
    todo:todosReducer,
});

export const myStore = createStore(rootTerminal);
