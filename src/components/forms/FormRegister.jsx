import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ApiService from '../../API/ApiService';

const FormRegister = () => {
  const [error, setError] = React.useState('');
  const passportRegex = /^[0-9]{4} [0-9]{6}$/;

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    ApiService.sendingDateReg(data, setError);
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="authorization__form">
        <div className="error-check">{error}</div>
        <div className="form__input-block form__input-block-register">
          <div className="form__input">
            <label>ФИО</label>
            <input type="text" className="input__reg" {...register('username')} />
          </div>
          <div className="form__input">
            <label>Дата рождения</label>
            <input type="date" className="input__reg" {...register('birthday')} />
          </div>
          <div className="form__input">
            <div style={{ display: 'flex', gap: '8px' }}>
              <div>
                <label>Серия паспорта</label>
                <input type="text" className="input__reg" {...register('passport_series')} />
              </div>
              <div>
                <label>Номер паспорта</label>
                <input type="text" className="input__reg" {...register('passport_number')} />
              </div>
            </div>
          </div>
          <div className="form__input">
            <label>Почта</label>
            <input type="text" className="input__reg login" {...register('email')} />
          </div>
          <div className="form__input ">
            <label>Пароль</label>
            <input type="password" className="input__reg pass" {...register('password')} required />
          </div>
          <div className="form__input">
            <label>Подтвердите пароль</label>
            <input
              type="password"
              className="input__reg pass"
              {...register('confirm-password')}
              required
            />
          </div>
        </div>
        <button type="submit" className="form__button">
          Регистрация
        </button>
        <div className="register__link">
          <Link to="/login">Есть аккаунт? Войдите!</Link>
        </div>
      </form>
    </>
  );
};

export default FormRegister;
