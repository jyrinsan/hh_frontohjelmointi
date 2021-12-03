import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render,screen,fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('addtodo',()=>{

  render(<App/>);
  
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc,{target:{value:'Gotocoffee'}})
  
  const date=screen.getByPlaceholderText('Date');
  fireEvent.change(date,{target:{value:'29.01.2021'}})
  
  const button=screen.getByText('Add');
  fireEvent.click(button);

  const tablecell=screen.getByText(/gotocoffee/i);
  expect(tablecell).toBeInTheDocument();

  const clearbutton=screen.getByText('Clear');
  fireEvent.click(clearbutton);

  const tablecell2=screen.queryByText(/gotocoffee/i);
  expect(tablecell2).toBeNull();
  });
