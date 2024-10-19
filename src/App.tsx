import { useState, useEffect } from "react";
import "./App.css";
import Stage from "./components/Stage";
import Queue from "./components/Queue";
import Header from "./components/Header";
import Authentication from "./components/Authentication";

function App() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    // setTheme(theme == "dark" ? "light" : "dark"); TODO: add dark mode support
  }
  const [authStatus, setAuthStatus] = useState(true);
  function toggleAuth() {
    setAuthStatus(!authStatus);
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  });
  return (
    <>
      <Header theme={theme} handleClick={toggleTheme} />
      <div className="container bg-transparent">
        {authStatus ? <Content /> : <Authentication onLogin={toggleAuth} />}
      </div>
    </>
  );
}

function Content() {
  return (
    <div className="row bg-transparent">
      <div className="col-sm bg-dark staged">
        <Stage user_id={1} />
      </div>
      <div className="col-sm">
        <Queue />
      </div>
    </div>
  );
}

export default App;
