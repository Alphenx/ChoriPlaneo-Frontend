import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAllPlansAsync,
  selectPlans,
} from '../../features/plans/plans-slice';
import Card from '../../shared/components/Card/Card';
import Loading from '../../shared/components/Loading/Loading';
import { APIStatus } from '../../shared/models/api-status';
import { FeedBackStyled } from '../../styles/feedback';

const PlansCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 30px;
  margin-bottom: 10rem;
`;

const AllPlansCardList = () => {
  const { plans, status, responseMsg } = useAppSelector(selectPlans);
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
            {plans.map(plan => (
              <li key={plan.title}>
                <Card plan={plan}></Card>
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
