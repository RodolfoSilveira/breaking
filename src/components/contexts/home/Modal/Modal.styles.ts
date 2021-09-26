import styled from 'styled-components'
import media, { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  fold: '280px'
});

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before{
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 4;
    filter: blur(2px);
    ${media.lessThan('medium')`
      min-height: 100vh;
    `}
  }
`
export const Container = styled.div`
  top: 60px;
  border-radius: 3px;
  position: absolute;
  background: #fff;
  z-index: 5;
  padding: 40px;
  width: 800px;
  margin: 20px;
  ${media.lessThan('medium')`
    width: 90%;
  `}
  ${customMedia.lessThan('fold')`
    padding: 20px;
  `}
`;

export const Closed = styled.div`
  margin: 20px;
  background: #FFF;
  position: absolute;
  border-radius: 360px;
  top: -80px;
  left: 900px;
  ${media.lessThan('medium')`
    left: 240px;
  `}
  ${media.between('medium', 'large')`
    left: 600px;
  `}
  ${customMedia.lessThan('fold')`
    left: 180px;
  `}
  &:focus {
    border: none;
    outline: none;
  }
`;

export const ButtonClose = styled.button`
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  color: #858585;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const InformationBox = styled.div`
  display: flex;
  ${media.lessThan('medium')`
    flex-wrap: wrap;
  `}
  ${media.between('medium', 'large')`
    flex-wrap: nowrap;
  `}
`;

export const ImageBox = styled.div`
  margin-right: 25px;
  ${media.lessThan('medium')`
    margin: 20px auto;
  `}
  ${media.between('medium', 'large')`
    margin-right: 40px;
  `}
`;

export const Image = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  ${media.lessThan('medium')`
    width: 200px;
  `}
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 520px;
  overflow-y: scroll;
  padding-right: 20px;
  ${media.lessThan('medium')`
    height: auto;
    overflow-y: none;
    padding-right: 0;
  `}
  ${media.between('medium', 'large')`
    height: auto;
    overflow-y: none;
    padding-right: 0;
  `}
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #4530b7;
    border-radius: 12px;
  }
`;

export const Header = styled.header``;

export const Title = styled.h2`
  font-size: 1.6rem;
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
  max-lines: 2;
`;

export const Ocuppation = styled.p`
  color:  #4530b7;
  font-size: .8rem;
`;

export const Info = styled.section`
  margin-top: 40px;
`;

export const Span = styled.p`
  color: #333;
  font-weight: normal;
  margin-bottom: 20px;
  font-size: 16px;
`

export const SubTitle = styled.h2`
  color: #333;
  font-weight: normal;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const List = styled.ul``;

export const Options = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    margin-top: 10px;
  }
`;

export const Details = styled.p`
  color: #999;
  font-size: .8rem;
`;

export const Section = styled.p`
  color: #333;
  font-weight: 500;
`;

export const History = styled.section`
  margin-top: 40px;
`;

export const HistoryTitle = styled.h2`
  color: #333;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: #999;
  line-height: 1.6rem;
  > svg {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    position: relative;
    top: 5px;
  }
`;
