import React from 'react';
import './TodoItem.css';
// import Card from '../UI/Card';

function TodoItem(props) {
    // console.log(props);

    const handleDelete = (e) => {
        props.handleDelete(e);
    };
    return (
        <div
            onClick={() => handleDelete(props.id)}
            className="todo-item"
        >
            <h3>{props.text}</h3>
        </div>
    );
}

export default TodoItem;
