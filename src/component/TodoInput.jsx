import React, { useState } from 'react'
import { addToDo } from '../redux/actions'
import { v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <h3>TodoInput</h3>
            <div className="row m-2">
                <input 
                onChange={(e)=> setName(e.target.value)}
                value={name}
                type="text" 
                className=" col form-control" />
                <button 
                onClick={()=> {
                    dispatch(addToDo(
                        {
                            id: uuid(),
                            name:name
                        }
                    ));
                    setName('');
                }}
                className="btn btn-primary mx-2">
                    Add</button>
            </div>
        </div>
    )
}

export default TodoInput