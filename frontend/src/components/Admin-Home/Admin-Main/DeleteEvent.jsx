import React, { useState } from 'react';
import { Button, Fade, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import './contact.css';
// import '../../Login-Signup/userAuth.css'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};
const url = 'http://localhost:5000/products/';

const DeleteEvent = () => {
    const [open, setOpen] = useState(false);
    const [id, setID] = useState('');
    const [warning, setWarning] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        axios.delete(url + id).then(console.log("Deleted"));
    }

    function handleSnack() {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return }
        setOpen(false);
        setWarning(false);
    };

    return (
        <>
        <form onSubmit={onSubmit} className="form-havala">
            <p classname = "toch" type="Owner's Name :"><input classname="hach" placeholder="Enter Transaction ID..." value={id} onChange={e => setID(e.currentTarget.value)}></input></p>
            <Button buttonSize='btn--wide' buttonColor='blue' type="submit" >Delete </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                TransitionComponent={Fade}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                action={
                    <React.Fragment>
                        <Button onClick={handleClose}></Button>
                        <i className="fas fa-times-circle" onClick={handleClose}></i>
                    </React.Fragment>
                }
            >
                <Alert onClose={handleClose} severity="success">{id} Event Added</Alert>
            </Snackbar>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                TransitionComponent={Fade}
                open={warning}
                autoHideDuration={5000}
                onClose={handleClose}
                action={
                    <React.Fragment>
                        <Button onClick={handleClose}></Button>
                        <i className="fas fa-times-circle" onClick={handleClose}></i>
                    </React.Fragment>
                }
            >
                <Alert onClose={handleClose} severity="error">Please Fill out all the Fields !</Alert>
            </Snackbar>
        </form>
        </>
    )
}

export default DeleteEvent;

