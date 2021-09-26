import styled from "styled-components";
import media from 'styled-media-query';

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  width: 100%;
  grid-template-columns: repeat(4, 263px);
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
  ${media.between('medium', 'large')`
    grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  `}
  justify-content: center;
`;

export default Grid
