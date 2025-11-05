import {DELETE_TODOS} from '../../Redux/Autho/actions'

export const Todo_List = ()=>{

    const dispatch = userDispatch();
    const data = userSelector((state)=> state.todo.todos);

    const handlDelete=(id)=>{
        dispatch({type:DELETE_TODOS,payload:id});
    };
    
    return (
        <>
           <h3>Todo_List</h3>
           {
            data.map((el)=(
               
                <div key={el.id}>
                    <p>{el.text}</p>
                    <button onClick={()=>handlDelete(el.id)}>delete</button>
                </div>
            ))
           }
        </>
    )
}