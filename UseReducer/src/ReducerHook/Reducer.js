import { data } from 'autoprefixer';
import {DELETES_TODO_ITEMS,ADD_TODO_ITEMS,EDITS_TODO_ITEMS} from './Action';;
import {initialValue} from './Store';

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
           
            case EDITS_TODO_ITEMS:
                if(action.payload.updateText && action.payload.id){
                    return{
                        ...state,
                        items:state.items.map((el)=>
                            el.id ===action.payload.id
                        ?{
                            isEdits:!el.isEdits,
                            text:action.payload.updateText,
                        }:el
                        ),
                    };
                    } else {
                        return{
                            ...state,
                            items:state.items.map((el)=>
                                el.id===action.payload?{...el, isEdits: !el.isEdits}:el
                            ),
                        }
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
