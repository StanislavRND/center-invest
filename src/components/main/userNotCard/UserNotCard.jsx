import React from 'react';
import { useNavigate } from 'react-router-dom';
import { default as doctor, default as event } from '../../../assets/img/event.png';
import privileges from '../../../assets/img/privilege.png';
import travel from '../../../assets/img/tour-bus.png';
import styles from './home.module.scss';

const UserNotCard = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.home__body}>
          <div className={styles.information}>
            <h1 className={styles.welcome}>Добро пожаловать, ростовчанин!</h1>
            <p className={styles.desc}>
              Добро пожаловать в мир привилегий с Картой Дона - вашим ключом к удивительным
              возможностям в регионе!
            </p>
            <button onClick={() => navigate('/create-card')} className={styles.button}>
              Открыть карту
            </button>
          </div>
          <div className={styles.possibilities}>Возможности</div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.item__header}>
                <img src={event} width={232} height={232} alt="" />
              </div>
              <div className={styles.item__title}>Мероприятия</div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__header}>
                <img src={privileges} width={232} height={232} alt="" />
              </div>
              <div className={styles.item__title}>Социальные льготы</div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__header}>
                <img src={doctor} width={232} height={232} alt="" />
              </div>
              <div className={styles.item__title}>Запись к врачу</div>
            </div>
            <div className={styles.item}>
              <div className={styles.item__header}>
                <img src={travel} width={232} height={232} alt="" />
              </div>
              <div className={styles.item__title}>Оплата проезда</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserNotCard;
