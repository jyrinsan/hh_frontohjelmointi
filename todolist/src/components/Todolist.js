import React from 'react';

const Todolist = ({todos, todo, addTodo, inputChanged}) => {

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
          </tr>
            {todos.map((todo, index) => {
                return (
                <tr key={index}>
                  <td>{todo.date}</td>
                  <td>{todo.desc}</td>
                </tr>
                )
            })}
        </tbody>
      </table>   
    </div>
  );
};

export default Todolist;