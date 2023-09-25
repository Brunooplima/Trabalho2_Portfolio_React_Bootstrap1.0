import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-black">
      <a class="navbar-brand text-info" href="/">
        Bruno Lima
      </a>
      <button class="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="/home">
              Quem Sou
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">
              Projetos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/clients">
              Parceiros
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacts">
              Contatos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
