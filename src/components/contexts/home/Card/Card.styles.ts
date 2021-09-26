import styled from 'styled-components'

export const Wrapper = styled.div`
  background: transparent;
  width: 225px;
  margin: 40px auto 0;
  cursor: pointer;
`

export const ImageBox = styled.div`
  display: flex;
  justify-content: end;
  height: 300px;
  > img {
    height: 100%;
    width: 205px;
    object-fit: cover;
  }
`

export const ProfileBox = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: #acacac;
    border-top: 0;
    border-right: 0;
    margin-top: -20px;
    overflow: visible;
  }

  background-color: #fff;

  > div {
    border-top: 1px solid #000;
  }
`

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  padding: 20px 0 20px;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin-top: 0;
  text-align: center;
  padding-bottom: 20px;
  margin-bottom: 0;
`;
