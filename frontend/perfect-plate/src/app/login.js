import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";


// SKELETON CODE

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [incorrectMessage, setIncorrectMessage] = useState("");
    const [rememberMe, setRememberMe] = useState(0);
    const router = useRouter();


    useEffect(() => {
        if (typeof window !== "undefined" && localStorage.getItem("rememberMe") == "true") {
        setEmail(localStorage.getItem("email"));
        setPassword(localStorage.getItem("password"));
        setRememberMe(1);
        }
    }, []);

    let handleCheckbox = async (e) => {
        if (rememberMe == 0) {
        setRememberMe(1);
        } else {
        setRememberMe(0);
        }
    };
    return (
        <div className="container">
        <body>
            <NavBar />
            <main>

            <div id="login">
                <form onSubmit={handleSubmit}>

                <h1>Sign in to PlatePerfect</h1>
                <h3 id="incorrect-credentials" style={{ color: 'red' }}>{incorrectMessage}</h3>

                <label for="email" className="field-label"><h3>Email</h3></label>
                <a><input type="text" className="fields" name="email" placeholder="johndoe@email.com" onChange={(val) => setEmail(val.target.value)} defaultValue={email}></input></a><br />
                <label for="password" className="field-label"><h3>Password</h3></label>
                <a><input type="password" className="fields" name="password" placeholder="Enter your password" onChange={(val) => setPassword(val.target.value)} defaultValue={password}></input></a><br />
                <div id="remember-me-div">
                    <input name="remember-me" type="checkbox" onChange={handleCheckbox} checked={rememberMe} />
                    <label htmlFor="remember-me">Remember Me</label>
                    <p id="forgotpassword"><a href="/forgot-password">Forgot your password?</a></p>
                </div>
                <button type="submit" id="sign-in-button">Sign-In</button>
                </form>
                <p id="or">OR</p>

            </div>

            <div id="footer">
            <a href="/registration" id="create-account-button"><p>Create an Account</p></a>
            </div>
            </main>

        </body>

        <footer>

        </footer>


        </div>
    )
}