import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: 1440px;
  z-index: 100;

  background-color: var(--base-color-bg);
  opacity: 0.9;
  font-family: var(--main-font-bold);
  border-bottom: 2px solid var(--main-color);
  width: calc(100% - 4rem);
  height: 7rem;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 0 auto 2rem;
  .logo {
    width: 200px;
    position: relative;
  }
  .theme {
    position: absolute;
    top: 0;
    right: -80px;
  }

  img {
    width: 100%;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    gap: 20px;

    .icon {
      height: 25px;
      width: 40px;
      color: var(--base-color-contrast);
    }
    .selected {
      background-color: var(--main-color-light);
      width: 100%;
      border-radius: var(--radius-m);
    }

    h2 {
      color: var(--base-color-contrast);
      font-size: var(--font-size-xs);
    }

    a {
      justify-content: center;
      margin: auto 0;
      width: 70px;
    }
  }

  @media (max-width: 860px) {
    .theme {
      display: none;
    }
  }

  @media (max-width: 769px) {
    border-bottom: 10px solid var(--main-color);
    bottom: 0;
    height: 5rem;
    position: fixed;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;
    margin: 0 auto;

    .logo {
      display: none;
    }

    nav {
      h2 {
        font-size: var(--font-size-xs);
      }

      .icon {
        height: 30px;
        width: 60px;
      }
      a {
        width: 70px;
      }
    }
  }

  @media (max-width: 426px) {
    border-bottom: 10px solid var(--main-color);
    bottom: 0;
    height: 5rem;
    position: fixed;
    justify-content: space-evenly;
    width: 100%;
    padding: 0;

    .logo {
      display: none;
    }

    nav {
      gap: 10px;
      h2 {
        font-size: var(--font-size-xxs);
      }

      .icon {
        height: 20px;
        width: 50px;
      }

      a {
        width: 55px;
      }
    }
  }
`;
