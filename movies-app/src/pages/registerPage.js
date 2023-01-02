import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
//import "../css/Register.css";
function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  const root = {
    
    justifyContent: "mid",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 6.5,
    margin: 0.5,
    ml:92,
    mr:92
};

  useEffect(() => {
    if (loading) return;
   // if (user) navigate("/movies/home");
   if (user) navigate("/");
  }, [user, loading, navigate]);
  return (
    <div className="register">
      <div className="register__container">
        <Paper sx={{...root}}>
        <div>
          Enter your name:
        </div>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
       
        <div>
          Enter your e-mail:
        </div>
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
       
        <div>
          Enter your password:
        </div>
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      
        <div>
          Click to register:
        </div>
        <button className="register__btn" onClick={register}>
          Register
        </button>
        </Paper>
        <Paper sx={{...root}}>
        <div>
          Register with Google:
        </div>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register
        </button>
        </Paper>
        <Paper sx={{...root}}>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
        </Paper>
      </div>
    </div>
  );
}
export default RegisterPage;