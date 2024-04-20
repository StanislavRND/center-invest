import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import ApiService from '../../API/ApiService';

const FormAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

	const navigate = useNavigate()

  const onSubmit = (data) => {
		ApiService.sendingDateAuth(data.email, data.password, navigate)
    console.log(data); 
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="authorization__form">
      <div className="form__input-block">
        <p style={{ color: 'red'}}>{errors.email?.message}</p>
        <div className="form__input login__input">
          <input
            {...register('email', { required: 'Поле не должно быть пустым' })}
            type="text"
            className="input__auth login"
            placeholder="Email"
            tabIndex={1}
          />
        </div>
        <p style={{ color: 'red'}}>{errors.password?.message}</p>
        <div className="form__input pass__input">
          <input
            {...register('password', { required: 'Поле не должно быть пустым' })}
            type="password"
            className="input__auth pass"
            placeholder="Пароль"
            tabIndex={2}
          />
        </div>
      </div>
      <button type="submit" className="form__button">
        Войти
      </button>
			<div className="register__link">
        <Link to="/register">Нет аккаунта? Зарегистрируйтесь!</Link>
      </div>
    </form>
  );
};
export default FormAuth;
