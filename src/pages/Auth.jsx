import React from 'react';
import imgLogo from '../assets/img/img-01.png';
import FormAuth from '../components/forms/FormAuth';

const Auth = () => {
  return (
    <section className="section__auth">
      <div className="authorization">
        <div className="authorization__body">
          <div className="authorization__img">
            <img src={imgLogo} alt="logo" />
          </div>
          <div>
            <div className="form__title">Авторизация</div>
            <FormAuth  />
          </div>
        </div>
        <div className="information__block">Здесь, на пороге Юга, пробуждается Ростов.</div>
      </div>
    </section>
  );
};

export default Auth;
