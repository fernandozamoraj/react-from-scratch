import React, {Component} from 'react';
import Todo from './todo';
import PropTypes from 'prop-types';


const Todos = ({todos}) =>{

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

Todos.propTypes = {
    todos: PropTypes.array.isRequired    
}

export default Todos;