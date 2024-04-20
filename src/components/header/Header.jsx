import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
const Header = () => {
  const navigate = useNavigate();
  const isCard = false;
  return (
    <div className="header">
      <div className="header__container container">
        <h1 className="header__title">Карта Дона </h1>
        <nav className="nav">
          <ul className="items">
            <li className="item">
              <Link to="/home">Главная</Link>
            </li>
            <li className="item">
              <Link to="/events">Мероприятия</Link>
            </li>
            {/* <li className="item">
              <Link to="/">Сотрудники</Link>
            </li>
            <li className="item">
              <Link to="/">Статистика</Link>
            </li>

            <li className="item">
              <Link to="/events">Мероприятия</Link>
            </li>
            <li className="item">
              <Link to="/calendar">Календарь</Link>
            </li> */}
          </ul>
        </nav>
        {isCard ? (
          <button onClick={() => navigate('/profile')} className="header__button">
            Профиль
          </button>
        ) : (
          <button onClick={() => navigate('/login')} className="header__button">
            Выйти
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
