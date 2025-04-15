import { useState } from 'react';
import './App.css'
import Button from './components/Button';
import Todos from './components/Todos';7
import { TODOS } from './data/data';
import AddTodo from './components/AddTodo';

function App() {

  const [todos, setTodos] = useState(TODOS);

  console.log(todos);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    
  }


  return (
    <div>
    <AddTodo todos={todos} setTodos={setTodos} />

      

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      <Button />
      <Button greeting="jambo" />
      <Button greeting="konichiwa" />

   </div>
  )
}

export default App
