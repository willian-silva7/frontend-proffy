// eslint-disable-next-line no-use-before-define
import React from 'react';
import whatsappImg from '../../assets/images/icons/whatsapp.png';
import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/37350277?s=460&u=3a6a4f7361fb96d6669217f85d4956f719ab81d2&v=4"
          alt="willian de oliveira"
        />
        <div>
          <strong>willian </strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Passionate about JS
        <br />
        <br />
        Apaixonado por JS
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappImg} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
