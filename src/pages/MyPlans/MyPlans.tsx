import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import MyPlansCardList from '../../components/MyPlansCardList/MyPlansCardList';
import Button from '../../shared/components/Button/Button';
import { Link } from 'react-router-dom';

const MyPlansSectionStyled = styled.section`
  margin-bottom: 10rem;
  position: relative;
  .page-buttons {
    justify-content: center;
    display: flex;
    gap: 20px;
    margin: 1rem auto;
    max-width: 600px;
    padding: 0 1rem;

    @media (max-width: 426px) {
      button {
        font-size: var(--font-size-xs);
        min-width: 135px;
      }
    }

    a {
      width: 100%;
    }
  }

  .create-button-desktop,
  .create-button-mobile {
    text-align: center;
    position: fixed;
  }

  .create-button-desktop {
    bottom: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      var(--base-color-bg) 50%
    );
    width: 100%;
    height: 7rem;

    button {
      margin-top: 1.7rem;
    }

    @media (max-width: 769px) {
      display: none;
    }
  }

  .create-button-mobile {
    bottom: 15%;
    right: 5%;

    button {
      height: 60px;
      border-radius: var(--radius-m);
    }

    @media (min-width: 770px) {
      display: none;
    }
  }
`;

const MyPlans = () => {
  return (
    <MyPlansSectionStyled>
      <div className="page-buttons">
        <Button value="Recommended" width={'100%'} styles={'outlined'} />

        <Link to={'/app/my-plans'}>
          <Button value="My plans" width={'100%'} styles="filled" />
        </Link>
      </div>

      <MyPlansCardList />

      <div className="create-button-desktop">
        <Link to={'/app/create-plan'}>
          <Button value="Create new plan" width={'250px'} styles={'filled'} />
        </Link>
      </div>
      <div className="create-button-mobile">
        <Link to={'/app/create-plan'}>
          <Button
            value={<AiIcons.AiOutlinePlus className="icon" />}
            iconSize={'2rem'}
            width={'60px'}
            styles={'filled'}
          />
        </Link>
      </div>
    </MyPlansSectionStyled>
  );
};

export default MyPlans;
