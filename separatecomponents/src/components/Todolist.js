import React, { useState } from 'react';
import TodoTable from './TodoTable';

const Todolist = () => {
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
    <div>
      <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo</legend>
          <label>Description: </label><input type="text" onChange={inputChanged} name="desc" value={todo.desc}/>
          <label> Date: </label><input type="text" onChange={inputChanged} name="date" value={todo.date}/>
          <input type="submit" value="Add"/>
        </fieldset>
      </form>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todolist;