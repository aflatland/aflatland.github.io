import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />

    </main>
  );
}