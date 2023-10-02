import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="corpo">
      <div className="home">
        <div className="home-content">
          <h1>Olá, Eu sou Bruno Lima</h1>
          <h3>Desenvolvedor</h3>
          <p>
            Estudante de Engenharia de Computação, com formação técnica em
            Automação Industrial e experiência em programação em Java e
            WordPress, além de básico em JavaScript React, Html, linguagem C,
            CSS e desenvolvimento Front-End. Realizo atividades
            extracurriculares na empresa júnior Commit jr e no projeto de
            extensão PETIT.
          </p>
          <div className="btn-box">
            <Link href="./Contatos.js">Fale Comigo</Link>
          </div>
        </div>
        <div className="home-img">
          <div className="circle">
            <div className="image">
              <img src="./components/fotos/bruno.jpeg" alt="" />
            </div>
          </div>
        </div>

        <div className="home-sci">
          <a
            href="https://www.facebook.com/bruno.oliveirapaesdelima/"
            target="_blank"
          >
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/brunoop_lima/" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/brunoplima/" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/Brunooplima" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
