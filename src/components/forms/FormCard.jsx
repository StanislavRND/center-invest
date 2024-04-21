import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ApiService from '../../API/ApiService';
import Back from '../UI/back/Back';
import Header from '../header/Header';
import styles from './forms.module.scss';
const FormCard = () => {
  const { register, handleSubmit } = useForm();

  const [userId, setUserId] = React.useState(null);

  const isOwnerCard = JSON.parse(localStorage.getItem('isOwnerCard'));

  const onSubmit = (data) => {
    if (isOwnerCard) {
      ApiService.sendingDateCard('Льготный', userId, data.certificate[0]);
    } else {
      ApiService.sendingDateCard('Общий', userId);
    }
    console.log(data);
  };
  React.useEffect(() => {
    ApiService.infoUserId(setUserId);
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form__card}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className={styles.title}>Открытие карты</div>
            <Link to="/create-card">
              <Back />
            </Link>
          </div>
          <div className={styles.input__blocks}>
            <div className={styles.input__block}>
              <label>Телефон</label>
              <input
                className={styles.input}
                {...register('phone')}
                type="text"
                placeholder="+7 (___) ___ -__-__"
              />
            </div>
            {isOwnerCard && (
              <div className={styles.input__block}>
                <label>Социальная справка</label>
                <input {...register('certificate')} type="file" accept=".png, .jpeg" />
              </div>
            )}
          </div>

          <div className={styles.button}>
            <button>Отправить</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCard;
