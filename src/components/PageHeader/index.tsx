/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />

        <div className="header-content">
          <strong>{props.children}</strong>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
