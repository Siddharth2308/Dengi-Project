import "./navbar.css";
import { ReactComponent as UserIcon } from "./icons/user.svg";
import { ReactComponent as SignOutIcon } from "./icons/signout.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group/esm/";
import fire from "../../fire";


const FireSignOut = () => {
	fire.auth().signOut();
	console.log("Sign Out Successful");
}

function Navbar() {
	
	const [user, setUser] = useState("");

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser("");
			}
		});
	}
	

	useEffect(() => {
		authListener();
	});

	return (
		<NavbarContainer>
		<NavItem text="Boutique Management System"/>
		<NavItem text="Welcome Dont forget to leave a Feedback !"/>
		{/* <NavItem icon={<CaretIcon />}>
		<DropdownMenu />
		</NavItem> */}
		</NavbarContainer>
	);
}

function NavbarContainer(props) {
	return (
		<nav className="navbar">
			<ul className="navbar-nav">{props.children}</ul>
		</nav>
	);
}

function NavItem(props) {
	const [open, setOpen] = useState(false);
	const { text } = props;
	let classname = text !== undefined ? "wtext" : "wotext";

	return (
		<li className={`${classname}`}>
			<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</a>

			{open && props.children}
			{text}
		</li>
	);
}

function DropdownMenu() {
	const [activeMenu, setActiveMenu] = useState("main");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const dropdownRef = useRef(null);
	const Uid = fire.auth().currentUser.uid;
	const fireRef = fire.firestore().collection('users').doc(Uid);

	fireRef.get().then(queryResult => {
		setPhone(queryResult.data().contact);
	});
	fireRef.get().then(queryResult => {
		setName(queryResult.data().name);
	});

	function DropdownItem(props) {
		return (
			<a
				href={props.link !== undefined ? props.link : "#"}
				className="menu-item"
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				<span className="icon-button">{props.leftIcon}</span>
				{props.children}
			</a>
		);
	}

	return (
		<div className="dropdown" ref={dropdownRef}>
			<CSSTransition
				in={activeMenu === "main"}
				timeout={500}
				classNames="menu-primary"
				unmountOnExit
			>
				<div className="menu">
					<DropdownItem leftIcon={<UserIcon />} goToMenu="profile">
						Profile
					</DropdownItem>
					<div onClick={FireSignOut}>
						<DropdownItem leftIcon={<SignOutIcon />}>
							Sign Out
						</DropdownItem>
					</div>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "profile"}
				timeout={500}
				classNames="menu-secondary"
				unmountOnExit
			>
				<div className="menu">
					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
						<h3>Profile details</h3>
					</DropdownItem>
					<DropdownItem link="bills" leftIcon={<UserIcon />}>
						Bills & Transactions
					</DropdownItem>
					<DropdownItem link="#" leftIcon={<UserIcon />}>
						{name}
					</DropdownItem>
					<DropdownItem link="#" leftIcon={<UserIcon />}>
						{phone}
					</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
}

export default Navbar;
