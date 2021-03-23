import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteToDo, updateToDo } from '../redux/actions';

function TodoItem({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    let dispatch= useDispatch();
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.lenght > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {editable ? <input 
                    type="text" 
                    className="form-control" 
                    value={name} 
                    onChange={
                        (e)=> setName(e.target.value)
                    }/> : <h4>{todo.name}</h4>}
                    
                </div>
                <button onClick={() => {
                    dispatch(updateToDo(
                        {
                            ...todo,
                            name:name
                        }
                    ));
                    if(editable) {
                        setName(todo.name);
                    }
                    
                    setEditable(!editable);
                    
                }} 
                className="btn btn-primary mx-2">{editable ? "Update" : "Edit"}</button>
                <button onClick={() => dispatch(deleteToDo(todo.id))} 
                className="btn btn-danger mx-2">Delete</button>
            </div>
        </div>
    )
}
export default TodoItem;