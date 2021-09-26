
import Spinner from "components/structure/Spiner/Spiner";
import * as S from './SuspenseFallback.styles'

const SuspenseFallback = () => (
  <S.SpinnerOverlay>
    <Spinner />
  </S.SpinnerOverlay>
);

export default SuspenseFallback;
