import React from "react";
import "./bootstrap.css";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Summary from "./components/Summary";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Summary/>
      <ContactMe/>
    </>
  );
}

export default App;
