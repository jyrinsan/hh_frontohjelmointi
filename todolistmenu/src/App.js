import React, { useState }  from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import fiLocale from 'date-fns/locale/fi';
import TabApp from './components/TabApp';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('one');

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

  let content;
  if (value==='one')
    content = <div>Welcome to my todos application</div>  
  else if (value==='two') {
    content = 
    <div>
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={fiLocale}>
      <DatePicker
        label="Date"
        value={todo.date}
        onChange={(date) => {
          dateChanged(date);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <span style={{margin: "10px"}} />
    <TextField label=" Description" name="description" variant="standard" onChange={textfieldChanged} value={todo.desc}/>
    <span style={{margin: "10px"}} />
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
  }

  return (
    <div className="App">
      <TabApp setValue={setValue} value={value}/>
      <div>{content}</div>
    </div>
  );
}

export default App;
