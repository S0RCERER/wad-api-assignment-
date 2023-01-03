import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

function LoginPage() {
  const context = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = () => {
    context.authenticate(email, password);
  };

  useEffect(() => {
    if (context.isAuthenticated === true) {
      return navigate("/")
    }
  })


  return (
    <div className="login">
      <div className="login__container">
        <h2>Login</h2>
        <input
          type="email"
          className="login__textBox"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={login}
        >
          
          Login
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );

}
export default LoginPage;