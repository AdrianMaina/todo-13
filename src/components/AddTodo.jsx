
import React, { useState } from 'react';


const AddTodo = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

   
    const lastId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) : 0;
    const newTodo = {
      id: lastId + 1,  
      body: input.trim()
    };

    setTodos([...todos, newTodo]);  
    setInput("");  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="todo" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
