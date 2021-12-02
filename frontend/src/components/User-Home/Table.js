import React, {useState} from 'react';
import fire from '../../fire';
import './Table.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 550,
    },
});

function daysIntoYear(date) {
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs};
}

export default function BasicTable() {

    const [BKF, setBK] = useState(0);
    const [Lun, setLun] = useState(0);
    const [Din, setDin] = useState(0);
    const [GBK, setGBK] = useState(0);
    const [GLun, setGLun] = useState(0);
    const [GDin, setGDin] = useState(0);

    const Uid = fire.auth().currentUser.uid;
    const fireRef = fire.firestore().collection('order-details').doc(Uid);

    const datee = new Date().toDateString();
    var guestsNum = 0;


    fireRef.get().then(queryResult =>{
        var Lunch = queryResult.data().Lunch;
        var BreakFast = queryResult.data().Breakfast;
        var Dinner = queryResult.data().Dinner;
        var G_Lun = queryResult.data().Guest_Lunch;
        var G_BKF = queryResult.data().Guest_BreakFast;
        var G_Din = queryResult.data().Guest_Dinner;

        const Datee = new Date();
        var Today = daysIntoYear(Datee);
        
        setBK(BreakFast[Today]);
        setLun(Lunch[Today]);
        setDin(Dinner[Today]);
        setGBK(G_BKF[Today]);
        setGLun(G_Lun[Today]);
        setGDin(G_Din[Today]);
    });

    const rows = [
        createData('BreakFast', datee, BKF, GBK),
        createData('Lunch', datee, Lun, GLun),
        createData('Dinner', datee, Din, GDin),
    ];

    const classes = useStyles();

    return (
        <div className="Table-pad">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Upcoming Order</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Guests</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}