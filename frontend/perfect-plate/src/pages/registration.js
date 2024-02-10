import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../app/page.module.css";

// SKELETON CODE

export default function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [promotion, setPromotion] = useState(0);
    const router = useRouter();
    const [incorrectMessage, setIncorrectMessage] = useState("");
    return (
    <div className="container">
        <body>
            <main>

            <div id="registration">
                <form onSubmit={console.log('hi')}>
                <h1>Create an account</h1>
                <h2>* - indicates a required field</h2>
                <h2>* First Name</h2>
                <input className="fields" type="text" placeholder="Enter your first name" onChange={(val) => setFirstName(val.target.value)}></input>
                <h2>* Last Name</h2>
                <input className="fields" type="text" placeholder="Enter your last name" onChange={(val) => setLastName(val.target.value)}></input>
                <h2>* Email Address</h2>
                <input className="fields" type="text" placeholder="Enter your email address" onChange={(val) => setEmail(val.target.value)}></input>
                <h2>* Password</h2>
                <input className="fields" type="password" placeholder="Enter a password" onChange={(val) => setPassword(val.target.value)}></input>
                <h2>* Confirm Password</h2>
                <input className="fields" type="password" placeholder="Re-enter the password" onChange={(val) => setConfirmPassword(val.target.value)}></input>
                
                <br/><br/><br/>
                <button type="submit" id="sign-in-button">Create your account</button>
                </form>
                <h3 id="incorrect-credentials" style={{color: 'red', position: 'absolute'}}>{incorrectMessage}</h3>
            </div>
            <div id="footer">
                <h3 id="or">Or, if you already have an account</h3>
                <a href="/login" id="create-account-button"><p>Sign-in</p></a>

            </div>
            </main>

        </body>

        <footer>

        </footer>


        </div>
    )
}