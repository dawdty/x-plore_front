import { useState } from "react";
import { api } from "../api";

interface Props {
  onLogin: () => void;
}

function Authentication({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (username.length === 0 || password.length === 0) {
      alert("Username and password cannot be empty");
      return;
    }
    api.login(username, password);
    
  };

  return (
    <>
      <div className="container bg-dark auth-form">
        <h1>Authentication</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb3">
            <label htmlFor="username" className="form-label" />
            <input
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone
            </div>
          </div>
          <div className="mb3">
            <label htmlFor="password" className="form-label" />
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Authentication;
