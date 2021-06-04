import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./SignIn.css";

function SignIn({user, setUser}) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(authUser => {
      if(authUser){
        setUser(authUser);
      }else{
        setUser(null);
      }
    });

    return () => unsub();
  }, [user, setUser])

  const signInHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .catch((error) => console.log(error));
  };

  return (
    <div className="signin">
      <div className="signin__form">
        <h2>Welcome Back!</h2>
        <small>We're so excited to see you again!</small>
        <form>
          <div className="signin__inputField">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signin__inputField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit" onClick={signInHandler}>
            Login
          </button>
        </form>
        <p>
          Need an Account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
