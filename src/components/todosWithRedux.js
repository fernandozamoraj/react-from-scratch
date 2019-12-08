import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTodos } from '../redux/todosActions';
import Todo from './todo';

class TodosWithRedux extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchTodos();
    }

    render(){

        const { todos } = this.props;

        if(!todos){
            return <div>Loading...</div>;
        }

        const todoJsx = todos.map( todo => {
            return <li key={todo.id}><Todo todo={todo} /></li>;
        });
    
        return (
            <div>
                <ul>
                    {todoJsx}
                </ul>
            </div>
        );
    }
}

TodosWithRedux.propTypes = {
    fetchTodos: PropTypes.func,
    todos: PropTypes.array
}

function mapStateToProps(state){
    return {
        todos: state.todos.items
    }
}

export default connect(mapStateToProps, { fetchTodos })(TodosWithRedux);
