import React from 'react';
import { Link } from 'react-router-dom';
import general from '../../../assets/img/asterisk.png';
import benefit from '../../../assets/img/responsibility.png';
import Back from '../../UI/back/Back';
import Header from '../../header/Header';
import styles from './card.module.scss';

const CreateCard = ({ isOwnerCard }) => {
  React.useEffect(() => {
    localStorage.setItem('isOwnerCard', JSON.stringify(isOwnerCard));
  }, [isOwnerCard]);

  const handleClickBenefit = () => {
    localStorage.setItem('isOwnerCard', JSON.stringify(true));
  };
  const handleClickGeneral = () => {
    localStorage.setItem('isOwnerCard', JSON.stringify(false));
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.card}>
          <div className={styles.back__title}>
            <div className={styles.title}>Виды карт</div>
            <Link to="/home">
              <Back />
            </Link>
          </div>

          <div className={styles.items}>
            <Link onClick={handleClickGeneral} to="/form-card">
              <div className={styles.item}>
                <div className={styles.item__img__general}>
                  <img src={general} width={180} height={180} alt="" />
                </div>
                <div className={styles.view}>Общий</div>
              </div>
            </Link>
            <Link onClick={handleClickBenefit} to="/form-card">
              <div className={styles.item}>
                <div className={styles.item__img__benefit}>
                  <img src={benefit} width={180} height={180} alt="" />
                </div>
                <div className={styles.view}>Льготный</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCard;
