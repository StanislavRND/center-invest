import React from 'react';
import imgLogo from '../assets/img/img-01.png';
import FormRegister from '../components/forms/FormRegister';

const Register = () => {
  return (
    <section className="section__auth">
      <div className="authorization">
        <div className="authorization__body">
          <div className="authorization__img">
            <img src={imgLogo} alt="logo" />
          </div>
          <div>
            <div className="form__title">Регистрация</div>
            <FormRegister />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
