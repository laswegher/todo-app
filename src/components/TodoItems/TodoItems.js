import React from 'react';
import './TodoItems.css';
import TodoItem from './TodoItem';

function TodoItems(props) {
    const todoItemsJSX = props.items.map((item) => {
        return (
            <TodoItem
                key={item.id}
                text={item.text}
                id={item.id}
                {...props}
            />
        );
    });

    return <>{todoItemsJSX}</>;
}

export default TodoItems;
