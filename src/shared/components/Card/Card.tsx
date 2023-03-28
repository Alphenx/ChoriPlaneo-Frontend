import React, { FC } from 'react';
import { Plan } from '../../../features/plans/plan.model';
import { CardStyled } from './CardStyled';
import * as AiIcons from 'react-icons/ai';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

interface CardProps {
  plan: Plan;
  cardType: string;
  detail?: boolean;
}

const Card: FC<CardProps> = ({ plan, cardType, detail = false }) => {
  const date = new Date(plan.date);
  const dateString = date.toLocaleString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h12',
  });

  return (
    <CardStyled cardType={cardType} detail={detail}>
      <div className="top-label">
        <div className="creator-info" data-testid="creator-info">
          <img
            src={
              plan.creator?.profileURL
                ? plan.creator.profileURL
                : `https://api.dicebear.com/5.x/thumbs/svg?seed=${plan.creator?.name}&scale=70`
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
      <Link to={`/detail/${cardType}/${plan._id}`}>
        <img
          className="plan-img"
          src={plan.planImgURL ?? '/assets/imgs/default-img.png'}
          width={300}
          alt="plan-img"
        />
      </Link>
      <div className="plan-info">
        <h2>{plan.title}</h2>
        <h3>{plan.place}</h3>
        <p>{plan.description}</p>
        <p>{dateString}</p>
      </div>

      <div className="plan-info-extra">
        <h2>Users following this plan: {plan.registeredUsers?.length}</h2>
        <h2>Status: {plan.status ? 'Public' : 'Private'}</h2>
      </div>

      <div className="bottom-label" data-testid="bottom-label">
        <Button
          data-testid="save-btn"
          value={'Save'}
          width={'150px'}
          styles={'outlined'}
        />
        <Button value={'Share'} width={'150px'} styles={'filled'} />
      </div>
    </CardStyled>
  );
};

export default Card;
