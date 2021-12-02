import {React, useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router";

function CardItem(props) {
    const init = props.init
    const [ctoggle, setCtoggle] = useState(init);
    const uid = props.uid
    const pid = props.id;
    const url = 'http://localhost:5000/cart/';


    const handleCart = () =>{
        if(ctoggle){
            axios.post(url + 'add',{
                u_id: uid,
                p_id: pid,
                quantity: 1
            }).then(console.log("Cart Updated"));
            setCtoggle(false);
        } else {
            // delete req
            axios.delete(url + uid + '/'+ pid).then(console.log("Removed From cart"))
            setCtoggle(true);
        }

    }

    return (
        <>
        <li className='cards__item'>
            <a className='cards__item__link' >
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img
                        className='cards__item__img'
                        alt='Travel Image'
                        src={props.src}
                    />
                </figure>
                <div className='cards__item__info'>
                    {/* <h9><i class="fas fa-calendar-alt"></i>  {props.date}</h9> */}
                    <h3 className='cards__item__text'><b>{props.text}</b></h3>
                    <h7>{props.header} Rs Only</h7>
                </div>
                <div className='cards__item__info'>
                    <button className='cards__item__button' onClick={handleCart}><i class="fas fa-book-reader"></i>
                        {ctoggle ? (
                            <>
                            <p></p>
                             Add to cart
                            </> ): (
                            <><p></p> Remove from Cart</>
                        )}
                    </button>
                </div>
            </a>
        </li>
        </>
    );
};

export default CardItem;


