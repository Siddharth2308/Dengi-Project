import React, { useState } from 'react';
import { Button, Fade, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import './contact.css';
// import '../../Login-Signup/userAuth.css'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};
const link = 'http://localhost:5000/products/update/';

const UpdateEvent = () => {
    const [id, setID] = useState('');
    const [open, setOpen] = useState(false);
    const [Oname, setOname] = useState('');
    const [details, setdetails] = useState('');
    const [status, setStatus] = useState(false);
    const [type, setType] = useState('');
    const [url, setUrl] = useState('');
    const [warning, setWarning] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        
        axios.put(link + id,{
            product_name: Oname,
            details: details,
            Sstatus: status,
            price: parseInt(type),
            photu: url
        }).then(handleClose());
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
            <p classname = "toch" type="Product ID :"><input classname="hach" placeholder="Enter Product ID..." value={id} onChange={e => setID(e.currentTarget.value)}></input></p>
            <p classname = "toch" type="Product Name :"><input classname="hach" placeholder="Enter Product Name..." value={Oname} onChange={e => setOname(e.currentTarget.value)}></input></p>
            <p classname = "toch" type="Details :"><input classname="hach" placeholder="Service Details..." name="message" value={details} onChange={e => setdetails(e.currentTarget.value)}></input></p>
            <p classname = "toch" type="Status :"><input classname="hach" placeholder="Availability" name="message" value={status} onChange={e => setStatus(true)}></input></p>
            <p classname = "toch" type="Price :"><input classname="hach" placeholder="Enter Price" name="message" value={type} onChange={e => setType(e.currentTarget.value)}></input></p>
            <p classname = "toch" type="URL :"><input classname="hach" placeholder="Enter Image URL" name="message" value={url} onChange={e => setUrl(e.currentTarget.value)}></input></p>
            <Button buttonSize='btn--wide' buttonColor='blue' type="submit" >Update</Button>
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
                <Alert onClose={handleClose} severity="success">{Oname} Event Added</Alert>
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

export default UpdateEvent;
