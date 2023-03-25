import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAllPlansAsync,
  selectPlans,
} from '../../features/plans/plans-slice';
import Card from '../../shared/components/Card/Card';
import Loading from '../../shared/components/Loading/Loading';
import { APIStatus } from '../../shared/models/api-status';
import { FeedBackStyled, PlansCardList } from './AllPlansCardListStyled';

const AllPlansCardList = () => {
  const { plans, status } = useAppSelector(selectPlans);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPlansAsync());
  }, [dispatch]);

  const generateCards = () => {
    switch (status) {
      case APIStatus.LOADING:
        return <Loading width={200} />;
      case APIStatus.IDLE:
        return (
          <PlansCardList>
            {plans
              .filter(plan => plan.status)
              .map(plan => (
                <li key={plan.title}>
                  <Card plan={plan} cardType={'public'} />
                </li>
              ))}
          </PlansCardList>
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

export default AllPlansCardList;
