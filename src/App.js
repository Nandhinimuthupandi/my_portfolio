import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div onTouchMove={() => setOpen(false)}>
     <Navbar open={open} setOpen={setOpen} />
     <Home />
     <About />
     <Skill />
     <Project />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
