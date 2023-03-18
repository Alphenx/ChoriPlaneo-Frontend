import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import HandleTheme from '../../shared/components/HandleTheme/HandleTheme';

const RegisterSectionStyled = styled.section`
  display: flex;
  width: 100%;
  text-align: center;

  .form-container {
    width: 50%;
    max-width: 500px;
    margin: 5rem auto 0;
    padding: 0 1.5rem;
  }

  .home-img {
    width: 50%;
    object-fit: cover;
    height: 100vh;
  }

  .logo {
    width: 90%;
    height: auto;
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
      <HandleTheme />
      <img
        className="home-img"
        src="/assets/imgs/friends.webp"
        alt="home-img"
        width={400}
      />
      <div className="form-container">
        <img
          className="logo"
          src="/assets/imgs/logo.png"
          alt="logo"
          width={596}
          height={76}
        />
        <RegisterForm />
      </div>
    </RegisterSectionStyled>
  );
};

export default Register;
