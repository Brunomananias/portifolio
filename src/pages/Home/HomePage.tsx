import React, { useEffect, useState } from 'react';
import './HomePage.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import TypingEffect from '../../components/EfeitoDigitacao/TypingEffect';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="imagem-perfil">
        <img src="../../img/eu.png" alt="" />
      </div>
      <div className="texto-apresentacao">
        <h1>Bruno Ananias</h1>
        <TypingEffect />
        <div className="icones">
          <a
            href="https://www.linkedin.com/in/bruno-ananias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icone" />
          </a>
          <a
            href="https://github.com/brunomananias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icone" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
