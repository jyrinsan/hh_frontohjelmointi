import React, { useState } from 'react'
import './App.css';
import Todolist from './components/Todolist';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  
  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (event) => {
    setTodos(todos.filter((todo, i) => i != event.target.id))
  }

  return (
    <Todolist todos={todos} todo={todo} inputChanged={inputChanged} addTodo={addTodo} deleteTodo={deleteTodo}/>
  );
}

export default App;
