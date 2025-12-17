import { data } from 'autoprefixer';
import {DELETES_TODO_ITEMS,ADD_TODO_ITEMS,EDITS_TODO_ITEMS} from './Action';;
import {initialValue} from './Store';
import { Result } from 'postcss';

export const reducer =(state = initialValue , action)=>{

    switch(action.type){
        case ADD_TODO_ITEMS:
            return{
                ...state,
                items:[
                    ...state.items,
                    {
                        id:data.now(),
                        text:action.payload,
                        isEdits:false,
                        isComplate:false
                    },
                ],
            };

            case DELETES_TODO_ITEMS:
                return{
                    ...state,
                    items:state.items.filter((el)=>el.id !== action.payload)

                };
                default:
                    return state;
    }
}