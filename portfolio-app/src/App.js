import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
