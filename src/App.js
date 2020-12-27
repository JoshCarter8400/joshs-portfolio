import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  const [navItem] = useState([
    {
      name: "About",
      url: "#about",
      description: "Short Description of myself",
    },
    {
      name: "Resume",
      description: "Link to resume and listing of skills",
      url: "#resume",
    },
    { name: "Portfolio", description: "Display of my work", url: "#portfolio" },
    {
      name: "Contact",
      description: "How to reach me",
      url: "#contact",
    },
  ]);
  const [selectedNavItem, setSelectedNavItem] = useState(navItem[0]);
  return (
    <div>
      <Nav
        navItem={navItem}
        selectedNavItem={selectedNavItem}
        setSelectedNavItem={setSelectedNavItem}
      ></Nav>
      <Footer></Footer>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
