import React, { useState, useEffect } from "react";
import AdminSign from "../Admin-Sign-In/AdminSign";
import HeroAdmin from "./Admin-Main/index";

function Main() {
    const [admin, setAdmin] = useState(false);

    const toggle = () => {
        setAdmin(!admin);
    }
    return (
        <>
            {admin ?
                ( <HeroAdmin/> ) : ( <AdminSign
                                        admin = {admin}
                                        setAdmin = {setAdmin}
                                        toggle = {toggle}
                                        />
             )}
        </>
    )
}

export default Main;
