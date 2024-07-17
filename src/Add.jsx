import React, { useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { googleAuthProvider, auth } from './javascript-config';

function Add() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async () => {
        alert("record submit");

        setEmail("")
        setPassword("")
    };

    const login = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log("User signed in:", result.user);
        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("Login failed: " + error.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully.");
        } catch (error) {
            console.error("Error during sign-out:", error);
            alert("Logout failed: " + error.message);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form style={{ background: "lightblue", padding: "20px", margin: "20px" }}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="password"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="check" />
                            <label className="form-check-label" htmlFor="check">Check me out</label>
                        </div>
                        <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <center>
                    <button type="button" className="btn btn-primary" style={{ margin: "20px", color: "white" }} onClick={login}>
                        Google Login
                    </button>
                    <button type="button" onClick={logout} className="btn btn-primary">Google Logout</button>
                </center>
            </div>
        </div>
    );
}

export default Add;
