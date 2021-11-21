import React from'react';

function TodoTable({todos, deleteTodo}) {
    return (
        <div>
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
}

export default TodoTable;