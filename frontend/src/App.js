import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";

import LandingPage from "./components/Landing-Page/LandingPage";
import UserSignIn from "./components/User-Sign-In/UserSignIn";
import UserSignUp from "./components/User-Sign-Up/UserSignUp";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Admin-Home/Main";
import { Track } from "./components/Track-Service/Track";
import Home from "./components/Home/Home";
import Cart from "./components/Home/Cart";

function App() {

	return (
		<>
			<Navbar />
			<Switch >
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/usersignin" component={UserSignIn} />
				<Route exact path="/usersignup" component={UserSignUp} />
				<Route exact path="/admin" component={Main} />
				<Route exact path="/track" component={Track} />
				<Route exact path="/home/:id" component={Home} />
				<Route exact path="/cart/:id" component={Cart} />
			</Switch>
		</>
	);
}

export default App;
