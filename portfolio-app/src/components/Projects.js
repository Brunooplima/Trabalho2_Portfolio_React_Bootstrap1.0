import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="Cards">
      <div className="Projects">
        <div className="Card1">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top1" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Site para a SEDESE</Card.Title>
              <Card.Text>
                Ajuda na construção do site Projeto Trajeto Renda em Wordpress
                na empresa júnior, na qual teve como iniciativa pela Secretaria
                de Estado de Desenvolvimento Social de Minas Gerais que tem como
                finalidade promover a inclusão socioprodutiva de indivíduos e
                famílias em situação de vulnerabilidade social por meio do
                fomento ao trabalho próprio.
              </Card.Text>
              <Button variant="primary">Leia Mais</Button>
            </Card.Body>
          </Card>

          <div className="Card2">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top2" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Projeto Realida Aumentada</Card.Title>
                <Card.Text>
                  Projeto realizado durante o projeto de extensão que tem como
                  foco utilizar materiais baratos para a construção de um
                  Sandbox AR, em que usa uma caixa de de areia, combinada com
                  Realidade Aumentada para criar um ambiente 3D dinâmico e
                  interativo para simular modificações na paisagem, projetando
                  curvas de nível em uma superfície.
                </Card.Text>
                <Button variant="primary">Leia Mais</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
