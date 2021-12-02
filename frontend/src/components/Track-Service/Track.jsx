import {React, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import '../Button/Button.css';

import './track.css'

export const Track = () => {
    const [ID, setID] = useState("0");
    const [transactions, setTransactions] = useState([]);

    const url = 'http://localhost:5000/';

    const handleSubmit = () => {
        axios.get(url + ID).then((res) =>{
            console.log(res.data);
            setTransactions(res.data);
        }); 
    }
   
    return (
        <>
        <div className="center">
            <Box
                sx={{
                    width: 900,
                    maxWidth: '100%',
                }}
            >
            <TextField fullWidth label="Enter Transaction ID" id="fullWidth" onChange={(e) => setID(e.target.value)}/>
            </Box>
        </div>
        <div className="fir">
            <Button buttonSize='btn--wide' buttonColor='primary' onClick={handleSubmit}>
                    Enter
            </Button>
        </div>
        <div className="map">
            {transactions.map((res) =>
                <>
                <p> Owner Name : {res.owner_name}</p>
                <p> Contact Info: {res.owner_contact}</p>
                <p> Vehicle Number: {res.bike_num}</p>
                <p> Servicing Details: {res.details}</p>
                </>
            )}
        </div>
        </>
    )
}
