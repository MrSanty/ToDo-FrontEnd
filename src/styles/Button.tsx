import styled from 'styled-components';


export const Button = styled.button`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #15013b;
  border-radius: 5px;
  background-color: #15013b;
  font-size: 1.2rem;
  color: #f3f3f3;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #cfcfcf;
    border: 1px solid #cfcfcf;
    color: #333;
  }
`;