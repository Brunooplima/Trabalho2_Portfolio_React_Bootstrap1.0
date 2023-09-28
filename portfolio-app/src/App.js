/*import { BrowserRouter, Route, Routes } from "react-router-dom"; */
import "./App.css";
import Home from "./components/Home";

import Projects from "./components/Projects";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Clients from "./components/Clients";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/*
      <BrowserRouter />
      <Header />
      <Routes />
      <Route exact path="" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/clients" element={<Clients />} />
      <Route exact path="/contact" element={<Contact />} />
      <Routes />
      <BrowserRouter />
      <Home />
       */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
