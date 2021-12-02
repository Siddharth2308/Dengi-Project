import {React, useState} from 'react';
import './style.css';
import { Link } from "react-router-dom";

const AdminSign = (props) => {

    const [Uid, setUid] = useState("");
    const [pass, setpass] = useState("");

    const {
        admin,
        setAdmin,
        toggle
    } = props;

    const handleLogin = () => {
        if( Uid === "Admin" && pass === "password" ){
            toggle();
        } else {
            console.log("Wrong Password / UID");
        }
    }


    return (
        <>
            <section className="login">
                <div className="loginContainer">
                    <img
                        src="images/admin_login.svg"
                        alt="login-svg"
                        className="auth__svg-img"
                    />
                    <label className="field">
                        <input
                            type="text"
                            autoFocus
                            required
                            value={Uid}
                            onChange={(e) => setUid(e.target.value)}
                        />
                        <span className="placeholder">Admin-Uid</span>
                    </label>

                    <label className="field">
                        <input
                            type="password"
                            required
                            value={pass}
                            onChange={(e) => setpass(e.target.value)}
                        />
                        <span className="placeholder">Password</span>
                    </label>
                    
                    <div className="btnContainer">
                        <button
                            className="btn--userAuth"
                            onClick={handleLogin}
                        >
                            Log In
                        </button>
                        <Link to="/">
                            <button
                                className="btn--userAuth"
                            >
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminSign;
