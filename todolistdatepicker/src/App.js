import React, { useState }  from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import fiLocale from 'date-fns/locale/fi';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const textfieldChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  const dateChanged = (date) => {
    const dateS = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    setTodo({...todo, 'date': dateS});
  }

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={fiLocale}>
        <DatePicker className="datePicker"
          label="Date"
          value={todo.date}
          onChange={(date) => {
            dateChanged(date);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <TextField label=" Description" name="description" variant="standard" onChange={textfieldChanged} value={todo.desc}/>
      <Button onClick={addTodo} variant="contained">Add</Button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.description}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;
