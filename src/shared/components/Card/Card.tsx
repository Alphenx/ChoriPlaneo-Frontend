import React, { FC } from 'react';
import { Plan } from '../../../features/plans/plan.model';
import { CardStyled } from './CardStyled';

interface CardProps {
  plan: Plan;
}

const Card: FC<CardProps> = ({ plan }) => {
  return (
    <CardStyled>
      <div className="creator-info">
        <img
          src={`https://ui-avatars.com/api/?name=A&background=0D8ABC&color=fff`}
          alt="user-img"
          className="user-img"
          width={60}
        />
        <p>User Name</p>
      </div>

      <img
        src={plan.planImgURL ?? '/assets/imgs/default-img.png'}
        width={300}
        alt="plan-img"
      />

      <div className="plan-info">
        <h2>{plan.title}</h2>
        <h3>{plan.place}</h3>
        <p>{plan.description}</p>
      </div>
    </CardStyled>
  );
};

export default Card;
