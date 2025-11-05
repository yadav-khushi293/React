
export const Todos_Add = ()=>{

    const dispatch = useDispatch();
    const addTodos = ()=>{

        let values = dataValue.current.value;

        let todosObj ={
            id:Date.now(),
            text:values,
            isEdit:flase,
            isComplete:false,
        };

        dispatch({type:Todos_Add,payload:todosObj});
    };

    return (
        <>
        <h1>Todo_Add</h1>

        <input type="text" placeholder="enter todos...." ref={dataValue}/>
        <button onClick={addTodos}>add</button>
        <Todo_List/>
        </>
    )
}