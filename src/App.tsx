import { useState, useEffect } from "react";
import "./App.css";
import Stage from "./components/Stage";
import Queue from "./components/Queue";
import Header from "./components/Header";
import Authentication from "./components/Authentication";

function App() {
  const [theme, setTheme] = useState("dark");
  // const [userCreated, setUserCreated] = useState(false);
  function toggleTheme() {
    // setTheme(theme == "dark" ? "light" : "dark"); TODO: add dark mode support
  }
  const [authStatus, setAuthStatus] = useState(false);
  function toggleAuth() {
    setAuthStatus(!authStatus);
  }
  // function setCreateUserTrue() {
  //   setUserCreated(true);
  // }
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  });
  useEffect(() => {});
  return (
    <>
      <Header theme={theme} handleClick={toggleTheme} />
      <div className="container bg-transparent">
        {authStatus ? (
          <Content />
        ) : (
          <Authentication onLogin={toggleAuth} onCreateUser={toggleAuth} />
        )}
      </div>
    </>
  );
}

function Content() {
  return (
    <div className="row bg-transparent">
      <div className="col-sm bg-dark staged">
        <Stage />
      </div>
      <div className="col-sm">
        <Queue />
      </div>
    </div>
  );
}

export default App;
