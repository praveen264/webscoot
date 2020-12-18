import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = { email, password, displayName,passwordCheck,contact,address};
      await Axios.post("https://manufac.herokuapp.com/users/register", newUser);
      const loginRes = await Axios.post("https://manufac.herokuapp.com/users/login", {
        email,
        password
       
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="page">
      <h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
      <label htmlFor="register-display-name">Full Name</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />

<label htmlFor="register-display-name">Contact</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setContact(e.target.value)}
        />
        <label htmlFor="register-display-name">Address</label>
        <textarea className="form-control"
          id="register-display-name"
         
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

<label htmlFor="register-password">Confirm Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
       
      

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
