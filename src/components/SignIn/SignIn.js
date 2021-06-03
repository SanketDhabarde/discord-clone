import React from 'react';
import './SignIn.css';

function SignIn() {
    return (
        <div className="signin">
            <div className="signin__form">
                <h2>Welcome Back!</h2>
                <small>We're so excited to see you again!</small>
                <form>
                    <div className="signin__inputField">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email"/>
                    </div>
                    <div className="signin__inputField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Need an Account? <a href="www.wikipedia.com">Register</a></p>
            </div>
        </div>
    )
}

export default SignIn;
