import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterSectionStyled = styled.section`
  display: flex;
  width: 100%;
  text-align: center;

  .form-container {
    width: 50%;
    max-width: 500px;
    margin: 8rem auto;
    padding: 0 1.5rem;
  }

  .home-img {
    width: 50%;
    object-fit: cover;
    height: 100vh;
  }

  .logo {
    width: 90%;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    .home-img {
      display: none;
    }
    .form-container {
      width: 90%;
    }
  }
`;

const Register = () => {
  return (
    <RegisterSectionStyled>
      <img className="home-img" src="/assets/imgs/friends.jpg" alt="home-img" />
      <div className="form-container">
        <img
          className="logo"
          src="/assets/imgs/choriplaneo-logo.png"
          alt="logo"
        />
        <RegisterForm />
      </div>
    </RegisterSectionStyled>
  );
};

export default Register;
