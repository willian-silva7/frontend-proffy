/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.png';
// import backIcon from '../../assets/images/icons/back.png';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <FiArrowLeft color="#fff" size={25} />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
