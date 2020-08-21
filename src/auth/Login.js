import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from 'firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(e => alert(e.message));
    }


    return (
        <div className="login">
            <Link tp="/">
                <img className="login__logo" src="" alt="" />
            </Link>
            <div className="login__container">
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__signInButton" onClick={login}>Sign in</button>
                    <p>
                        By signing-in you agree with the Conditions of Use & Sale.Please see our Privacy Notice
                        ,our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className="login__registerButton" onClick={register}>Create your amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
