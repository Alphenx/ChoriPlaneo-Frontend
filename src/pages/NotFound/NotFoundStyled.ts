import styled from 'styled-components';

export const NotFoundSectionStyled = styled.section`
  margin: 0rem auto;
  font-family: var(--main-font-regular);

  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  color: darkblue;

  .container {
    width: 100%;
    height: 100vh;
  }
  .title {
    padding-top: 10rem;
    height: 25rem;
    font-size: 1.5rem;

    h1 {
      font-family: var(--main-font-bold);
      font-size: 2.5rem;
    }
  }

  .back {
    font-size: 1.2rem;
    bottom: 0;
    width: 100%;
    a {
      font-family: var(--main-font-bold);
      color: darkblue;
      background-color: rgba(240, 248, 255, 0.2);
      padding: 1rem 2rem;
      border: darkblue solid 3px;
      margin: 30px 0;
      display: inline-block;
      border-radius: 10px;

      :hover {
        cursor: pointer;
        scale: 1.1;
      }
    }
  }
`;
