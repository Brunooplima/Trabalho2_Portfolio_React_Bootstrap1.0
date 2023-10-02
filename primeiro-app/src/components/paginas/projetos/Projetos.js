import { Button, Card } from "react-bootstrap";
import "./Projetos.css";

function Projetos() {
  return (
    <section className="home">
      <div className="cards">
        <div className="card">
          <div className="img1">
            <span>Projeto Renda</span>
          </div>

          <div className="content">
            <span className="title">Site para a SEDESE</span>
            <p className="desc">
              Ajuda na construção do site Projeto Trajeto Renda em Wordpress na
              empresa júnior, na qual teve como iniciativa pela Secretaria de
              Estado de Desenvolvimento Social de Minas Gerais que tem como
              finalidade promover a inclusão socioprodutiva de indivíduos e
              famílias em situação de vulnerabilidade social por meio do fomento
              ao trabalho próprio.
            </p>
          </div>
          <div className="arrow">
            <span>&#8673;</span>
          </div>
        </div>
        <div className="card">
          <div className="img2">
            <span>Sandbox</span>
          </div>

          <div className="content">
            <span className="title">Projeto Realida Aumentada</span>
            <p className="desc">
              Projeto realizado durante o projeto de extensão que tem como foco
              utilizar materiais baratos para a construção de um Sandbox AR, em
              que usa uma caixa de de areia, combinada com Realidade Aumentada
              para criar um ambiente 3D dinâmico e interativo para simular
              modificações na paisagem, projetando curvas de nível em uma
              superfície.
            </p>
          </div>

          <div className="arrow">
            <span>&#8673;</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
