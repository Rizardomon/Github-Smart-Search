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
  background: rgb(168, 38, 84);
  background: -moz-linear-gradient(
    90deg,
    rgba(168, 38, 84, 1) 0%,
    rgba(253, 140, 105, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(168, 38, 84, 1) 0%,
    rgba(253, 140, 105, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(168, 38, 84, 1) 0%,
    rgba(253, 140, 105, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a82654",endColorstr="#fd8c69",GradientType=1);
  flex-direction: column;
  overflow-y: scroll;
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
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 6px;
  font-size: ${rem(16)};
  font-weight: bold;
  padding-left: ${rem(10)};
  background-color: rgba(255, 255, 255, 0.3);
  color: black;

  :focus {
    border: 1px solid salmon;
    outline: none;
  }

  ::placeholder {
    color: black;
  }
`;

export const Button = styled.button`
  height: 100%;
  width: 20%;
  background: rgb(233, 0, 0, 0.4);

  border-radius: 5px;
  border: none;
  font-size: ${rem(16)};
  color: white;
  box-sizing: content-box;
  margin-left: ${rem(10)};
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background: rgb(233, 0, 0, 0.8);
  }

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
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  img {
    width: 25%;
    height: 25%;
    border-radius: 50%;
  }

  p {
    color: black;
    font-size: ${rem(18)};
    text-align: center;
  }
`;
