import React, { useEffect, useState } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';

function useEvents() {
    const [events, setEvents] = useState({});
    const [hope, setHope] = useState([{}]);
    const url = 'http://localhost:5000/';

    useEffect(() => {
        axios.get(url).then((res)=>{
            setHope(res.data);
            // console.log(hope);
        }, [2])
    });
    return hope;
};

function Cards(props) {

    const hope = useEvents();
    const u_id = parseInt(props.uid);

    return (
        <>
        <div className='cards'>
            <h1 className='h1__events'>Check out Our Catlouge!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    {hope.map((event) =>
                        <CardItem
                            init = {true}
                            uid = {u_id}
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
    );
};

export default Cards;
