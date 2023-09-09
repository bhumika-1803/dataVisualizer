import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Footer } from "./Components/Footer";
import { Contact } from "./Pages/Contact";

function App() {
  const [theme, setTheme] = React.useState(true);
  function changeTheme(themeVal) {
    setTheme(themeVal);
  }
  return (
    <div className="App">
      <Navbar theme={theme} changeTheme={changeTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/about" element={<About theme={theme}/>} />
        <Route path="/contact" element={<Contact theme={theme}/>} />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
