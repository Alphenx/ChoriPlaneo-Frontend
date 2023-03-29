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
  const { plan, status, responseMsg } = useAppSelector(selectPlans);

  const { planId, cardType } = useParams();
  const planDetailId = planId ?? '';
  const cardTypeDetail = cardType ?? 'public';

  useEffect(() => {
    dispatch(getPlanByIdAsync(planDetailId));
  }, [dispatch, planDetailId]);

  const generateFeedback = () => {
    switch (status) {
      case APIStatus.LOADING:
        return <Loading width={80} />;
      case APIStatus.IDLE:
        return (
          <FeedBackStyled status={APIStatus.IDLE}>{responseMsg}</FeedBackStyled>
        );
      case APIStatus.ERROR:
        return (
          <FeedBackStyled status={APIStatus.ERROR}>
            <h3>Ops... this plan don't exists.</h3>
          </FeedBackStyled>
        );
    }
  };

  return (
    <DetailStyled>
      {generateFeedback()}
      <Card plan={plan} cardType={`${cardTypeDetail}`} detail={true} />
    </DetailStyled>
  );
};

export default Detail;
