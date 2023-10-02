import { Link } from "react-router-dom";
import "./Home.css";
import { Icon } from "@iconify/react";

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
            <Link to="/contatos">Fale Comigo</Link>
          </div>
        </div>
        <div className="esconder-img">
          <div className="home-img">
            <div className="circle">
              <div className="image">
                <img
                  src="https://avatars.githubusercontent.com/u/138326567?v=4"
                  alt="foto bruno"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
