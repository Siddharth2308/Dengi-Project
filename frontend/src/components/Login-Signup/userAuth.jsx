import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./userAuth.css";

const UserAuth = (props) => {
	const [hasAccount, setHasAccount] = useState(true);
	const [forgot_pass, setPass] = useState(false);
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		emailError,
		passwordError,
		handleSignUp,
		name,
		setName,
		number,
		setNumber,
		nameError
	} = props;

	return (
		<>
			<section className="login">
				<div className="loginContainer">
					{hasAccount ? (
						<>
							<img
								src="images/signin.svg"
								alt="login-svg"
								className="auth__svg-img"
							/>
						</>
					) : (
						<>
							<img
								src="images/signup.svg"
								alt="auth-1"
								className="auth__svg__signup-img"
							/>
						</>
					)}
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

					<label className="field">
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<span className="placeholder">Password</span>
					</label>

					<p className="errorMsg">{passwordError}</p>

					<div className="btnContainer">
						{hasAccount ? (
							<>
								<button
									className="btn--userAuth"
									onClick={handleLogin}
								>
									Log In
								</button>
								<Link to = "/">
								<button
									className="btn--userAuth"
								>
									Go Back
								</button>
								</Link>
								<p>
									Don't have an account ?
									<span
										onClick={() =>
											setHasAccount(!hasAccount)
										}
									>
										Sign Up
									</span>
								</p>
								<p>
									<Link to="/forgotpassword">
										<span>
											Forgot Password ?
										</span>
									</Link>
								</p>
							</>
						) : (
							<>
								<button
									className="btn--userAuth"
									onClick={handleSignUp}
								>
									Sign Up
								</button>
								<Link to="/">
									<button
										className="btn--userAuth"
									>
										Go Back
									</button>
								</Link>
								<p>
									{" "}
									Have an account ?
									<span
										onClick={() =>
											setHasAccount(!hasAccount)
										}
									>
										Sign In
									</span>
								</p>
							</>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default UserAuth;
