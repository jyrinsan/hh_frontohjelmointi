import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from'./TodoTable';

test('renderstodotable',()=>{
  const row=[
    {desc:'Gotocoffee',date:'24.01.2021'}
  ];

  render(<TodoTable todos={row}/>);

  const tablecell=screen.getByText(/gotocoffee/i);
  expect(tablecell).toBeInTheDocument();
});