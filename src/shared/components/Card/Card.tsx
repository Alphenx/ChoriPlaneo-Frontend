import React, { FC } from 'react';
import { Plan } from '../../../features/plans/plan.model';
import { CardStyled } from './CardStyled';
import * as AiIcons from 'react-icons/ai';
import Button from '../Button/Button';

interface CardProps {
  plan: Plan;
  cardType: 'public' | 'myplans' | 'recommended';
}

const Card: FC<CardProps> = ({ plan, cardType }) => {
  return (
    <CardStyled cardType={cardType}>
      <div className="top-label">
        <div className="creator-info" data-testid="creator-info">
          <img
            src={
              plan.creator?.profileURL
                ? plan.creator.profileURL
                : `https://ui-avatars.com/api/?name=${plan.creator?.name?.toUpperCase()}&background=0D8ABC&color=fff`
            }
            alt="user-img"
            className="user-img"
            width={60}
          />

          <div>
            <h4>{plan.creator?.name}</h4>
            <p>{plan.creator?.email}</p>
          </div>
        </div>

        <div className="edit-share" data-testid="edit-share">
          <Button
            value="Edit"
            padding={'0.5rem 1rem'}
            width={'100px'}
            styles={'filled'}
          />

          <Button
            value={<AiIcons.AiOutlineShareAlt className="icon" />}
            styles={'filled'}
          />
        </div>
        <div className="close-btn">
          <Button
            value={<AiIcons.AiOutlineClose className="icon" />}
            styles={'outlined'}
          />
        </div>
      </div>

      <img
        src={plan.planImgURL ?? '/assets/imgs/default-img.png'}
        width={300}
        height={200}
        alt="plan-img"
      />
      <div className="plan-info">
        <h2>{plan.title}</h2>
        <h3>{plan.place}</h3>
        <p>{plan.description}</p>
      </div>

      <div className="bottom-label" data-testid="bottom-label">
        <Button value={'Save'} width={'150px'} styles={'outlined'} />
        <Button value={'Share'} width={'150px'} styles={'filled'} />
      </div>
    </CardStyled>
  );
};

export default Card;
