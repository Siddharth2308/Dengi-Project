import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Fade, Snackbar } from '@material-ui/core';
import fire from "../../fire";
import MuiAlert from '@material-ui/lab/Alert';
import "./style.css";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function Forgot() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [open, setOpen] = useState(false);

    const clearInputs = () => {
        setEmail("");
    };

    const handleFpass = () => {
        clearInputs("");
        fire.auth().sendPasswordResetEmail(email)
        .catch((err) => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                default:
                    break;
            }
        })
        .then(setOpen(true));
        console.log("change Password");
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return }
        setOpen(false);
    };

    return (
        <>
            <section className="login">
                <div className="loginContainer">
                    <img
                        src="images/forgot.svg"
                        alt="auth-1"
                        className="auth__svg__signup-img"
                    />
                    <h1 className = "f-pass"> Forgot Password </h1>

                     <label className="field">
                        <input
                            type="text"
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="placeholder">Email-ID</span>
                    </label>
                    <p className={`${emailError ? "errorMsg" : "noMsg"}`}>
                        {emailError}
                    </p>
                    <button
                        className="btn--userAuth"
                        onClick={handleFpass}
                    >
                        Send Password Change Link
                    </button>
                    <Link to="/usersignin">
                        <button
                            className="btn--userAuth"
                        >
                            Go Back
                        </button>
                    </Link>
                </div>
            </section>
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
                    <>
                        <Button onClick={handleClose}></Button>
                        <i className="fas fa-times-circle" onClick={handleClose}></i>
                    </>
                }
            >
                <Alert onClose={handleClose} severity="success"> Check Your Mail to Reset Password</Alert>
            </Snackbar>
        </>    )
}

export default Forgot;
