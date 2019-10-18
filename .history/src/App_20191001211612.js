import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..." className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "First Task",
      isCompleted: false
    },
    {
      text: "Second Task",
      isCompleted: false
    },
    {
      text: "Third Task",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;