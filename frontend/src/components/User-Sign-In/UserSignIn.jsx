import React, { useState, useEffect } from "react";
import UserAuth from "../Login-Signup/userAuth";
import fire from "../../fire";
import UserHome from "../User-Home/UserHome";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function UserSignIn() {
	const [user, setUser] = useState(false);
	const [udata, setUdata] = useState({});
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [hasAccount, setHasAccount] = useState("");
	const [nameError, setNameError] = useState("");
	const [uid, setUid] = useState(0);
	const [transactions, setTransactions] = useState([]);

	const history = useHistory()

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};
	const clearErrors = () => {
		setEmailError("");
		setPasswordError("");
	};

	const url = 'http://localhost:5000/';

	const handleLogin = () => {
		clearErrors();
		axios.get(url + 'users/' + email + '/' + password).then((res) => {
			console.log("Datta", res.data, "email:", email, "password:", password);
			if( res.data === 69){
				console.log(res.data);
				setEmailError(" User Doesn't Exist");
			} else{
				console.log(res.data);
				history.push("/home/" + res.data[0].u_id);				
			}
		})
	};

	const handleLogout = () => {
		fire.auth().signOut();
	};

	const handleSignUp = () => {
		clearErrors();
		if (
			(email !== "") &&
			(password !== "")
		) {
			axios.post(url + 'users/add',{
				email: email,
				paravli: password
			}).then((res) =>{
				setUdata(res.data);
				setUser(true);
				history.push("/home/" + res.data[0].u_id);
			})
		} else {
			setEmailError("Please fill out all the fields");
			setNameError("Please fill out all the fields");
		}
	};

	const authListener = () => {
		if (user) {
			setUser(user);
		} else {
			setUser("");
		}
	};

	useEffect(() => {
		authListener();
	});

	return (
		<>
			{user ? (
				<UserHome handleLogout={handleLogout} />
			) : (
				<UserAuth
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					handleLogin={handleLogin}
					handleSignUp={handleSignUp}
					hasAccount={hasAccount}
					setHasAccount={setHasAccount}
					emailError={emailError}
					passwordError={passwordError}
					name={name}
					setName={setName}
					number={number}
					setNumber={setNumber}
					nameError={nameError}
				/>
			)}
		</>
	);
}

export default UserSignIn;
