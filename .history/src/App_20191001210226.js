import React, { useState } from 'react';

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

  return (
    <div className="app">
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))
        }
      </div>
    </div>
  )
}

export default App;