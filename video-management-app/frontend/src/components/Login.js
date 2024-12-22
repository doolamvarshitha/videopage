import React, { useState } from "react";
import { loginUser, registerUser } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const { data } = await loginUser({ username, password });
      localStorage.setItem("token", data.token);
      alert("Login successful");
      window.location.href = "/videos";
    } catch (err) {
      alert("Login failed");
    }
  };

  const handleRegister = async () => {
    try {
      await registerUser({ username, password });
      alert("Registration successful. Please log in.");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h1>Login or Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
