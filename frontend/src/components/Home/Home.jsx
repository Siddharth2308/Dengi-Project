import React from 'react';
import { useParams } from "react-router";
import { Button } from '../Button/Button';
import Cards from '../Cards/Cards';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    let { id } = useParams();
    let cart = '/cart/' + id;

    return (
        <>
        <Cards uid = {id}/>
        <div className="ithe">
            <Link to= {cart}>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                        View Cart
                </Button>
            </Link>
        </div>

        
        </>
    )
}

export default Home;
