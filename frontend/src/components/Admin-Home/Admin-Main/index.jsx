import React, { useState } from 'react';
import PopupAdd from './PopupAdd';
import PopupDel from './PopupDel';
import PopupUpdate from './PopupUpdate';
import AddEvent from './AddEvent';
import DeleteEvent from './DeleteEvent';
import UpdateEvent from './UpdateEvent';
import { Button } from '../../Button/Button';
import { Link } from 'react-router-dom';
import './HeroAdmin.css';

function HeroAdmin() {

    const [click, setClick] = useState(false);
    const [openPopup_addEv, setOpenPopup_addEv] = useState(false);
    const [openPopup_delEv, setOpenPopup_delEv] = useState(false);
    const [openPopup_UpEv, setOpenPopup_UpEv] = useState(false);
    const closeMobileMenu = () => setClick(false);

    const handleLogout = () => {
        console.log("Logout");
    };

    const handlePopupAdd = () => {
        setOpenPopup_addEv(true);
        closeMobileMenu();
    };

    const handlePopupDel = () => {
        setOpenPopup_delEv(true);
        closeMobileMenu();
    };
    const handlePopupUpdate = () => {
        setOpenPopup_UpEv(true);
        closeMobileMenu();
    };


    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-4.mp4' autoPlay loop muted /> */}
            <h2 className="admin__h2">Welcome Back Admin. Dont Forget to LogOut !</h2>
            <div className='hero-btns'>
                <Button buttonSize='btn--wide' buttonColor='primary' onClick={handlePopupAdd}><i class="fas fa-plus-circle"></i> Create</Button>
                <Button buttonSize='btn--wide' buttonColor='primary' onClick={handlePopupUpdate}><i class="far fa-edit"></i> Update</Button>
                <Button buttonSize='btn--wide' buttonColor='primary' onClick={handlePopupDel}><i class="fas fa-ban"></i> Delete</Button>
                <Link to='/'>
                    <Button buttonSize='btn--wide' buttonColor='primary' onClick={handleLogout} ><i class="fas fa-sign-out-alt"></i> Log Out</Button>
                </Link>
            </div>
            <PopupAdd
            title = "Add New Event"
            openPopup_addEv = {openPopup_addEv}
            setOpenPopup_addEv = {setOpenPopup_addEv}
            >
                <AddEvent/>
            </PopupAdd>
            <PopupDel
            title= "Delete Event"
            openPopup_delEv = {openPopup_delEv}
            setOpenPopup_delEv = {setOpenPopup_delEv}
            >
                <DeleteEvent/>
            </PopupDel>
            <PopupUpdate
            title = "Update Event"
            openPopup_UpEv = {openPopup_UpEv}
            setOpenPopup_UpEv = {setOpenPopup_UpEv}
            >
                <UpdateEvent/>
            </PopupUpdate>
        </div>
    );
}

export default HeroAdmin;
