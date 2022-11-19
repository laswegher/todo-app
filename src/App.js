import React, { useState, useEffect } from 'react';
import './App.css';
import NewItem from './components/NewTodoItem/NewItem';
import TodoItems from './components/TodoItems/TodoItems';

function App() {
    const [todo, setTodo] = useState(
        JSON.parse(localStorage.getItem('todo')) || []
    );

    //Setting Todo our LocalStorage
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    }, [todo]);
    console.log(todo);

    //Taking Data from Child (Form) And Adding
    function addNewTodo(newItem) {
        setTodo((prevState) => {
            return [newItem, ...prevState];
        });
    }

    //Taking Data from Child (Form) Deleting Item
    function handleDelete(id) {
        const deletedTodo = todo.filter((el) => el.id !== id);
        setTodo(deletedTodo);
    }

    return (
        <div className="app">
            <NewItem addNewTodo={addNewTodo} />
            <TodoItems
                handleDelete={handleDelete}
                items={todo}
            />
        </div>
    );
}

export default App;
