import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    background-color: #7e6cca;
    border: none;
    padding: 15px 20px;
    font-weight: bold;
    font-size: 16px;
    color: #f1f1f1;
    font-weight: 900;
    text-align: center;
    border-radius: 5px;
    margin: 40px;

    &::placeholder {
      color: #fff;
      opacity: 1;
      text-align: center;
      font-size: 15px;
      text-transform: uppercase
    }
  }
`;
