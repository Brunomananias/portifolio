import React, { useEffect, useState } from "react";
import "./SobrePage.css";

const About: React.FC = () => {
  return (
    <div className="container-sobre">
      <div className="imagem">
        <img src="../../img/eu.png" alt="" />
      </div>
      <div>
        <h1 style={{ textAlign: 'center'}}>Quem é Bruno Ananias?</h1>
        <p>
          Sou um profissional de TI com três anos de experiência em
          desenvolvimento web e desktop, graduado em análise e desenvolvimento
          de sistemas pela Faculdade Pitagoras. Meu objetivo é fornecer soluções
          eficientes e inovadoras que atendam às necessidades e expectativas dos
          clientes, utilizando as melhores práticas e ferramentas do mercado.
          Atualmente, trabalho como Analista Desenvolvedor na Saga Tecnologia,
          uma empresa que desenvolve softwares para gestão de logistica. Lá, eu
          participo de criação de novas funcionalidades e correção de bugs.
        </p>
      </div>
    </div>
  );
};

export default About;
