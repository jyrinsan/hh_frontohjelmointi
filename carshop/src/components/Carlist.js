import React, { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Button, Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Addcar from './Addcar';
import Editcar from './Editcar'

export default function Carlist() {
    
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => fetchData(),[]);

    const gridRef = useRef();

    const fetchData = () => {
        fetch('http://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))

    };

    const deleteCar = (link) => {
      if (window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))

        setOpen(true)
      }
  };

  const saveCar = (car) => {
      fetch('http://carstockrest.herokuapp.com/cars', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
      }, body: JSON.stringify(car)
      })
      .then(res => fetchData())
      .catch(err => console.error(err));
  };  
  
  const updateCar = (link, car) => {
    console.log("update car", car, link);
    fetch(link, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'
    }, body: JSON.stringify(car)
    })
    .then(res => fetchData())
    .catch(err => console.error(err));

  const saveCar = (car) => {
      fetch('http://carstockrest.herokuapp.com/cars', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
      }, body: JSON.stringify(car)
      })
      .then(res => fetchData())
      .catch(err => console.error(err));
  }; 

}; 

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


    const columns = [
        { headerName: "Brand", field: "brand", sortable:true, filter: true, floatingFilter: true },
        { headerName: "Model", field: "model", sortable:true, filter: true, floatingFilter: true },
        { headerName: "Color", field: "color", sortable:true, filter: true, floatingFilter: true },
        { headerName: "Fuel", field: "fuel", sortable:true, filter: true, floatingFilter: true },
        { headerName: "Year", field: "year", sortable:true, filter: true, floatingFilter: true },
        { headerName: "Price", field: "price", sortable:true, filter: true, floatingFilter: true }, 
        { headerName: "", cellRendererFramework:  (row) =>
          <Editcar updateCar={updateCar} car={row.data} /> , width: 100},       
        { headerName: "", field: "_links.self.href", cellRendererFramework: (field) => <Button size='small' color='error' onClick={() => deleteCar(field.value)}>Delete</Button>, width: 100}
      ]
   
    return (
      <div className="ag-theme-material" style={{height: '650px',width: '100%',margintop: 'auto'}}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Car deleted"
          action={action}
        />
        <Addcar saveCar={saveCar}/>
        <AgGridReact 
          frameworkComponents={{
            deleteRenderer: (field) => <Button size='small' color='error' onClick={() => deleteCar(field.value)}>Delete</Button>,
            editRenderer: row => <Editcar car={row} />
          }}
          ref={gridRef}
          onGridReady={params => gridRef.current=params.api}
          rowSelection="single"
          animateRows='true'
          columnDefs={columns} 
          rowData={cars} 
          pagination={true}
          paginationPageSize={10} />
      </div> 
    )
}