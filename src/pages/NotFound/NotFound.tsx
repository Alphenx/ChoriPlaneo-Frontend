import { Link } from 'react-router-dom';

import { NotFoundSectionStyled } from './NotFoundStyled';

const NotFound = () => {
  return (
    <NotFoundSectionStyled>
      <div className="container">
        <div className="title">
          <h1>Ops...404</h1>
          <h3>Look like you're lost</h3>
        </div>
        <div className="back">
          <p>Sorry, the page you are looking for is not avaible right now.</p>
          <Link to={'/'}>Go back</Link>
        </div>
      </div>
    </NotFoundSectionStyled>
  );
};

export default NotFound;
