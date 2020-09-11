import React, {Component} from 'react';
import {connect ,useSelector ,useDispatch} from 'react-redux';
import {updateTodo} from "../redux/actions";


function TodoListFunc() {
    let todo = useSelector((state)=> {return state.todo } );
    let dispatch = useDispatch();
    return (
        <>
            {
                todo.map(item=>{
                    return (
                        <div key={item.id} style={{marginTop  : '8px'}}>
                            {item.title}
                            <span style={{marginLeft : '15px' ,color:'green'}}>
                                {item.completed ? '✔' :<button onClick={()=>dispatch(updateTodo(item.id))}>-</button> }
                                </span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default TodoListFunc;