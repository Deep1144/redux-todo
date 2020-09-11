import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateTodo} from "../redux/actions";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.todo.map(item => {
                        return (
                            <div key={item.id} style={{marginTop  : '8px'}}>
                                {item.title}
                                <span style={{marginLeft : '15px' ,color:'green'}}>
                                {item.completed ? '✔' :<button onClick={()=>this.props.updateTodo(item.id)}>-</button> }
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};
const mapStateToDispatch = (dispatch) => {
    return {
        updateTodo: (id) => dispatch(updateTodo(id))
    }
};


export default connect(mapStateToProps, mapStateToDispatch)(TodoList);
