import styled from 'styled-components';


export const Spinner = styled.div`
  border: 4px solid #0000009b;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  margin: auto;

  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
