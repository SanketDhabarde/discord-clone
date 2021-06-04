import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import "./SignUp.css";

function SignUp({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        history.push("/");
      } else {
        console.log("no user yet");
      }
    });

    return () => unsub();
  }, [user, history, setUser]);

  const signUpHandler = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="signup">
      <div className="signup__form">
        <form>
          <div className="signup__inputField">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signup__inputField">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup__inputField">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={signUpHandler}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
