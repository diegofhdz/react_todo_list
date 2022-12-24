import React, { useState } from 'react'
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([{name: 'drink water', id: 0, isComplete: false}]);
  return (
    <>
    <TodoList todos={todos}/>
    <button>Add Item</button>
    <button>Clear All</button>
    <div>Left to do: 0</div>
    </>
    
  );
}

export default App;