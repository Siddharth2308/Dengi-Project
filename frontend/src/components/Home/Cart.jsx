import {React,useEffect, useState} from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardItem from '../Cards/CardItem';

function useEvents(id) {
    const [events, setEvents] = useState({});
    const [hope, setHope] = useState([{}]);
    const url = 'http://localhost:5000/cart/' + id;

    useEffect(() => {
        axios.get(url).then((res)=>{
            setHope(res.data);
            // console.log(hope);
        }, [2])
    });
    return hope;
};

const Cart = () => {
    let { id } = useParams();
    const hope = useEvents(id);
    
    return (
        <>
        <div className='cards'>
            <h1 className='h1__events'>Your Cart</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    {hope.map((event) =>
                        <CardItem
                            init = {false}
                            uid = {id}
                            id = {event.id}
                            string = {event.photu}
                            src={event.photu}
                            text={event.product_name}
                            label={event.details}
                            header={event.price}
                            path={event.photu}
                            date={event.price}
                        />
                    )}
               </div>
            </div>
        </div>
        </>
    )
}

export default Cart;
