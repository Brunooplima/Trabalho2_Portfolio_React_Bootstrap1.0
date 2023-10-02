import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/paginas/home/Home";
import Projetos from "./components/paginas/projetos/Projetos";
import Contatos from "./components/paginas/contatos/Contatos";
import "./index.css";
import Parceiros from "./components/paginas/parceiros/Parceiros";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/projetos" element={<Projetos />} />

          <Route exact path="/parceiros" element={<Parceiros />} />

          <Route exact path="/contatos" element={<Contatos />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
