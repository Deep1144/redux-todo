import React, {Component} from 'react';
import {addTodo} from "../redux/actions";
import {connect} from 'react-redux';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
    }

    setNewTodo(event) {
        this.setState({
            newTodo: event.target.value
        });
    }

    addTodo() {
        let todo = {
            title: this.state.newTodo,
            id: Date.now(),
            completed: false,
        };
        if(this.state.newTodo !== ''){
            this.props.addTodo(todo);
            this.setState({
                newTodo: ''
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Redux Todo</h2>
                <input type='text' onChange={(event) => this.setNewTodo(event)} value={this.state.newTodo}/>
                <button style={{marginLeft: '15px'}} onClick={() => this.addTodo()}>Add</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);