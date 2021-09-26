import { Outlet } from 'react-router-dom';
import { PublicContexts } from './Public.contexts';
import * as S from './Public.styles';

const Public = () => (
  <PublicContexts>
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  </PublicContexts>
);

export default Public;
