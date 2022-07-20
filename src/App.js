import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      popAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      popAlert("Light Mode is Enabled", "success");
    }
  };

  const [alert, setalert] = useState(null);
  let popAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/About" element={<About mode={Mode} />} />
            <Route
              exact path="/"
              element={
                <TextBox mode={Mode} alert={alert} popAlert={popAlert} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
