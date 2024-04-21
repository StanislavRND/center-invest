import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from './../../API/ApiService';
import './header.scss';
const Header = () => {
  const navigate = useNavigate();

  const [isModer, setIsModer] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    ApiService.infoUserStaff(setIsModer, setIsLoading);
  }, []);

  return (
    <div className="header">
      <div className="header__container container">
        <h1 className="header__title">Карта Дона </h1>
        <nav className="nav">
          {isLoading ? (
            <div>Загрузка...</div>
          ) : (
            <ul className="items">
              {!isModer && (
                <>
                  <li className="item">
                    <Link to="/home">Главная</Link>
                  </li>
                  <li className="item">
                    <Link to="/events">Мероприятия</Link>
                  </li>
                  <li className="item">
                    <Link to="/">Запись к врачу</Link>
                  </li>
									<li className="item">
                    <Link to="/">Отделения банка</Link>
                  </li>
                </>
              )}
              {/* <li className="item">
                <Link to="/">Статистика</Link>
              </li>
              <li className="item">
                <Link to="/events">Мероприятия</Link>
              </li>
              <li className="item">
                <Link to="/calendar">Календарь</Link>
              </li>{' '}
              */} 
            </ul>
          )}
        </nav>

        <button onClick={() => navigate('/login')} className="header__button">
          Выйти
        </button>
      </div>
    </div>
  );
};

export default Header;
