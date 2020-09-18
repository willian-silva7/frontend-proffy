// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { FiBook, FiCpu, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/landing.png';
import './styles.css';
import api from '../../services/api';

const Landing = () => {
  const [totalConnections, setTotalconnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      setTotalconnections(response.data);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <FiBook className="image" />
            Estudar
          </Link>

          <Link to="/give-class" className="give-classes">
            <FiCpu className="image" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{' '}
          <FiHeart className="image" />
        </span>

        <img src={landingImg} alt="landing" className="hero-image" />
      </div>
    </div>
  );
};

export default Landing;
