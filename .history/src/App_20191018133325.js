import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './App.css'

function Todo({ todo, index, changeTodoState, deleteTodo }) {
  return (
    <div className="todo">
      <FormControlLabel control={
        <Checkbox
          checked={todo.isCompleted}
          value={todo.text}
          onChange={() => changeTodoState(index)}
        />}
        label={todo.text}
      />
      <div>
        <button onClick={() => deleteTodo(index)}>x</button>
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

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  return (
    <Container maxWidth="sm">
      <div className="app">
        <div className="todo-list">
          {
            todos.map((todo, index) => (
              <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
            ))
          }
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </Container>
  )
}

export default App;