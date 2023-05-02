import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Card from '../../shared/components/Card/Card';
import { APIStatus } from '../../shared/models/api-status';
import { FeedBackStyled, PlansCardList } from './MyPlansCardListStyled';
import {
  getUserInfoAsync,
  selectUsers,
} from '../../features/users/users-slice';

const MyPlansCardList = () => {
  const dispatch = useAppDispatch();
  const { user, status } = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUserInfoAsync());
  }, [dispatch]);

  return status !== APIStatus.ERROR ? (
    <>
      {user.createdPlans.length !== 0 ? (
        <PlansCardList>
          <h2 className="list-title">Created Plans</h2>
          {user.createdPlans.map(plan => (
            <li key={plan.title} data-testid="listitem">
              <Card plan={plan} cardType={'myplans'} />
            </li>
          ))}
        </PlansCardList>
      ) : (
        <FeedBackStyled>
          <h3>You don't have any plan, create a new one!</h3>
        </FeedBackStyled>
      )}
      {user.savedPlans.length !== 0 ? (
        <PlansCardList>
          <h2 className="list-title">Saved Plans</h2>
          {user.savedPlans.map(plan => (
            <li key={plan.title} data-testid="listitem">
              <Card plan={plan} cardType={'public'} />
            </li>
          ))}
        </PlansCardList>
      ) : (
        <FeedBackStyled>
          <h3>You don't have saved plans!</h3>
        </FeedBackStyled>
      )}
    </>
  ) : (
    <FeedBackStyled>
      <h3>Error. Plans not found.</h3>
    </FeedBackStyled>
  );
};

export default MyPlansCardList;
