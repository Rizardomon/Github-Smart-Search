import { rem } from 'polished';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const LandingPageContainer = styled.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  display: flex;
  background-color: #282d35;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: ${rem(15)};
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 6px;
  font-size: ${rem(16)};
  padding-left: ${rem(10)};
  background-color: rgba(255, 255, 255, 0.3);
  color: salmon;

  :focus {
    border: 1px solid salmon;
    outline: none;
  }

  ::placeholder {
    color: #282d35;
  }
`;

export const Button = styled.button`
  height: 100%;
  width: 10%;
  background-color: salmon;
  border-radius: 5px;
  border: none;
  font-size: ${rem(16)};
  color: #282d35;
  box-sizing: content-box;
  margin-left: ${rem(10)};
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const ResultsContainer = styled.div`
  margin-top: 10px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  margin-top: 10px;
  height: auto;
  width: 100%;

  .row {
    display: flex;
    cursor: pointer;
    width: 44%;
    height: 45px;
    margin-top: 10px;
    background-color: transparent;
    border-radius: 5px;
    align-items: center;
    justify-content: flex-start;
    pointer-events: none;
  }

  .row > h2 {
    color: salmon;
    pointer-events: auto;
  }

  .row:hover {
    background-color: salmon;
  }

  .row > h2:hover {
    color: #282d35;
  }

  .repo-name {
    margin-left: 5px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 20%;
    height: 20%;
  }

  p {
    color: black;
    font-size: ${rem(18)};
    text-align: center;
  }
`;
