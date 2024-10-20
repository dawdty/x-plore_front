import { useState } from "react";
import { api } from "../api";

interface Props {
  onLogin: () => void;
  onCreateUser: () => void;
}

function Authentication({ onLogin, onCreateUser }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    if (username.length === 0 || password.length === 0) {
      alert("Username and password cannot be empty");
      return;
    }
    api.login(username, password, onLogin);
  };

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    if (username.length === 0 || password.length === 0) {
      alert("Username and password cannot be empty");
      return;
    }
    api.createUser(username, password, onCreateUser);
  };

  return (
    <div className="container bg-dark auth-form">
      <h1>Authentication</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSignIn}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Authentication;
