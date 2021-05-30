import React from 'react';
import './SignUp.css';

function SignUp() {
    return (
        <div className="signup">
            <div className="signup__form">
                <form>
                    <div className="signup__inputField">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email"/>
                    </div>
                    <div className="signup__inputField">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="signup__inputField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
