import styled from 'styled-components'

const Spinner = styled.div`
  display: inline-block;
  border: 5px solid #0c1818;
  border-radius: 50%;
  border-top-color: #4530b7;
  height: 6rem;
  width: 6rem;
  animation: spin 1s ease-in-out infinite;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  height: 100px;
  bottom: 50%;
  z-index: 5;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
