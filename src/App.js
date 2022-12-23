import React from 'react'
import TodoList from './TodoList';

function App() {
  return (
    <>
    <TodoList/>
    <button>Add Item</button>
    <button>Clear All</button>
    <div>Left to do: 0</div>
    </>
    
  );
}

export default App;