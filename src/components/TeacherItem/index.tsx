/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import whatsappImg from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';
import './styles.css';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  cost: number;
  bio: string;
  subject: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function CreateNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name} </strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={CreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappImg} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
