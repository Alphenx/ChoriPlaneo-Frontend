import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createPlanAsync, selectPlans } from '../../features/plans/plans-slice';
import Button from '../../shared/components/Button/Button';
import Loading from '../../shared/components/Loading/Loading';
import { PlanStatus } from '../../shared/models/api-status';

import {
  CreateFormStyled,
  InputLabelStyled,
  CheckboxLabelStyled,
  FeedBackStyled,
} from './CreatePlanFormStyled';

const CreatePlanForm = () => {
  const [image, setImage] = useState('');
  const dispatch = useAppDispatch();
  const { createPlanStatus, responseMsg } = useAppSelector(selectPlans);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const imageUrl = file ? URL.createObjectURL(file as Blob) : '';
    setImage(imageUrl);
  };

  const generateFeedback = () => {
    switch (createPlanStatus) {
      case PlanStatus.LOADING:
        return <Loading width={200} />;
      case PlanStatus.SUCCESS:
        return (
          <FeedBackStyled msg={responseMsg} status={PlanStatus.SUCCESS}>
            <h3>{responseMsg}</h3>
          </FeedBackStyled>
        );
      case PlanStatus.ERROR:
        return (
          <FeedBackStyled msg={responseMsg} status={PlanStatus.ERROR}>
            <h3>{responseMsg}</h3>
          </FeedBackStyled>
        );
    }
  };

  return (
    <CreateFormStyled
      data-testid="form"
      onSubmit={e => {
        e.preventDefault();
        dispatch(createPlanAsync(e.currentTarget));
      }}
    >
      {generateFeedback()}
      <label className="plan-img">
        <span>Add your plan image</span>
        <img
          src={image === '' ? '/assets/imgs/default-img.png' : image}
          alt="Insert your img"
        />

        <input
          data-testid="File"
          name="planImgURL"
          type="file"
          accept=".jpg,.png,.webp"
          onChange={e => onImageChange(e)}
        />
      </label>

      <InputLabelStyled role={'complementary'}>
        <span>Title:</span>
        <input
          placeholder="Title"
          type="text"
          name="title"
          id="title"
          pattern="[a-zA-Z ]{3,30}"
          required
        />
      </InputLabelStyled>

      <InputLabelStyled role={'complementary'}>
        <span>Description:</span>
        <textarea
          data-testid="Description:"
          placeholder="Description"
          rows={10}
          maxLength={200}
          name="description"
          id="description"
          autoCorrect="on"
          required
        />
      </InputLabelStyled>

      <InputLabelStyled role={'complementary'}>
        <span>Place:</span>
        <input
          placeholder="Place"
          type="text"
          name="place"
          id="place"
          pattern="[a-zA-Z ]{3,30}"
          required
        />
      </InputLabelStyled>

      <InputLabelStyled role={'complementary'}>
        <span>Date:</span>
        <input
          placeholder="Date"
          type="date"
          name="date"
          id="date"
          pattern="[a-zA-Z ]{3,30}"
          required
        />
      </InputLabelStyled>

      <CheckboxLabelStyled>
        <p>Private</p>
        <input type="checkbox" name="status" value="public" defaultChecked />
        <p>Public</p>
      </CheckboxLabelStyled>

      <Button
        type="submit"
        value="Create plan"
        width={'200px'}
        styles={'filled'}
      />
    </CreateFormStyled>
  );
};

export default CreatePlanForm;
