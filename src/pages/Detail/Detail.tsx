import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { FeedBackStyled } from '../../components/MyPlansCardList/MyPlansCardListStyled';
import {
  getPlanByIdAsync,
  selectPlans,
} from '../../features/plans/plans-slice';
import Card from '../../shared/components/Card/Card';
import Loading from '../../shared/components/Loading/Loading';
import { APIStatus } from '../../shared/models/api-status';

const DetailStyled = styled.section`
  max-width: 900px;
  margin: 0 auto 5rem;
  padding: 1rem;
`;

const Detail = () => {
  const dispatch = useAppDispatch();
  const { plan, status } = useAppSelector(selectPlans);

  const { planId = '', cardType = 'public' } = useParams();

  useEffect(() => {
    dispatch(getPlanByIdAsync(planId)).catch(err => {
      throw new Error(err);
    });
  }, [dispatch, planId]);

  const generateFeedback = () => {
    switch (status) {
      case APIStatus.LOADING:
        return <Loading width={200} />;
      case APIStatus.IDLE:
        return <Card plan={plan} cardType={`${cardType}`} detail={true} />;
      case APIStatus.ERROR:
        return (
          <FeedBackStyled>
            <h3>Ops... this plan don't exists.</h3>
          </FeedBackStyled>
        );
    }
  };

  return <DetailStyled>{generateFeedback()}</DetailStyled>;
};

export default Detail;
