import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getUserInfoAsync,
  selectPlans,
} from '../../features/plans/plans-slice';
import Card from '../../shared/components/Card/Card';
import Loading from '../../shared/components/Loading/Loading';
import { APIStatus } from '../../shared/models/api-status';
import { FeedBackStyled, PlansCardList } from './MyPlansCardListStyled';

const MyPlansCardList = () => {
  const { user, status } = useAppSelector(selectPlans);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserInfoAsync());
  }, [dispatch]);

  const generateCards = () => {
    switch (status) {
      case APIStatus.LOADING:
        return <Loading width={200} />;
      case APIStatus.IDLE:
        return (
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
              <FeedBackStyled status={APIStatus.ERROR}>
                <h3>You don't have any plan, create a new one!</h3>
              </FeedBackStyled>
            )}
          </>
        );
      case APIStatus.ERROR:
        return (
          <FeedBackStyled status={APIStatus.ERROR}>
            <h3>Error. Plans not found.</h3>
          </FeedBackStyled>
        );
    }
  };

  return generateCards();
};

export default MyPlansCardList;
