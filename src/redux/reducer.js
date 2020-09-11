import {ADD_TODO, UPDATE_TODO} from "./actions";

const initialState = {
    todo: []
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo , action.payload]
            };
        case UPDATE_TODO:
            let todo = state.todo;
            let updatedTodo = todo.map(item=>{
                if(item.id == action.payload){
                    return {...item , completed : true}
                }
                else{
                    return item;
                }
            });
            return {
                ...state,todo : updatedTodo
            };
        default:
            return state;
    }
};

export default todoReducer;