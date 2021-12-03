import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function Addcar({saveCar}) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: '', price: ''
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const addCar = () => {
        saveCar(car);
        handleClose();
    }

    return (
        <div>
            <Button  style={{margin: 10}} color="primary" variant="outlined" onClick={handleClickOpen}>
                Add car
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New car</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="brand"
                    value={car.brand}
                    label="Brand"
                    onChange={e => handleInputChange(e)}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="model"
                    value={car.model}
                    label="Model"
                    onChange={e => handleInputChange(e)}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="color"
                    value={car.color}
                    label="Color"
                    onChange={e => handleInputChange(e)}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="fuel"
                    value={car.fuel}
                    label="Fuel"
                    onChange={e => handleInputChange(e)}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="year"
                    value={car.year}
                    label="Year"
                    onChange={e => handleInputChange(e)}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="price"
                    value={car.price}
                    label="Price"
                    onChange={e => handleInputChange(e)}
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={addCar}>Save</Button>
                </DialogActions>
            </Dialog>
    </div>
    )
}