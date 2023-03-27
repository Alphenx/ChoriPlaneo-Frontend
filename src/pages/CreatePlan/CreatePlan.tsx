import styled from 'styled-components';
import CreatePlanForm from '../../components/CreatePlanForm/CreatePlanForm';

const CreatePlanSectionStyled = styled.section`
  margin: 1rem 0 5rem;
`;

const CreatePlan = () => {
  return (
    <CreatePlanSectionStyled>
      <CreatePlanForm />
    </CreatePlanSectionStyled>
  );
};

export default CreatePlan;
