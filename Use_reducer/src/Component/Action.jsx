export const Increments ={type: 'INCREMENT'};
export const Decrements= {type:'DECREMENT'};
export const Reset={type:'RESET'};

export const incrementByValue=(value)=>{

    return{
        type:'IncrementByValue',
        payload:value,
    };
};

export const decrementByValue=(value)=>{
    return{
        type:'DecrementByValue',
        payload:value,
    };

};