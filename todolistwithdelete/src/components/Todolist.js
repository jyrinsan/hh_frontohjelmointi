import React, { useState }  from 'react';

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
      <table>
        <tbody>
          <tr>
                  <th>Date</th>
                  <th>Description</th> 
                  <th></th> 
          </tr>
            {todos.map((todo, index) => {
                return (
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.desc}</td>
                  <td><input type="button" id={index} onClick={deleteTodo} value="Delete"/></td>
                </tr>
                )
            })}
        </tbody>
      </table>   
    </div>
  );
};

export default Todolist;