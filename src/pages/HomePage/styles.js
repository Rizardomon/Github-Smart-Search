import { rem } from 'polished';
import { FaGithub, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
  background: rgb(93, 105, 190);
  background: -moz-linear-gradient(
    90deg,
    rgba(93, 105, 190, 1) 0%,
    rgba(200, 159, 235, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(93, 105, 190, 1) 0%,
    rgba(200, 159, 235, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(93, 105, 190, 1) 0%,
    rgba(200, 159, 235, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5d69be",endColorstr="#c89feb",GradientType=1);
  flex-direction: column;
  overflow-y: scroll;
`;

export const Header = styled.div`
  width: 100%;
  height: 12%;
  padding: ${rem(15)};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: ${rem(22)};
    }
  }
`;

export const GithubIcon = styled(FaGithub)`
  margin-left: ${rem(10)};
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
  color: white;

  :focus {
    border: 1px solid salmon;
    outline: none;
  }

  ::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  height: 100%;
  width: 20%;
  background: rgba(93, 105, 190, 0.8);

  border-radius: 5px;
  border: none;
  font-size: ${rem(16)};
  color: white;
  box-sizing: content-box;
  margin-left: ${rem(10)};
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgba(93, 105, 190, 0.3);
  }

  :focus {
    outline: none;
  }

  @media screen and (max-width: 480px) {
    width: 22%;
    font-size: ${rem(12)};
  }
`;

export const SearchIcon = styled(FaSearch)`
  margin-right: ${rem(10)};

  @media screen and (max-width: 480px) {
    margin-right: ${rem(5)};
  }
`;

export const Card = styled.div`
  margin-top: ${rem(40)};
  height: auto;
  width: 100%;

  @media screen and (max-width: 480px) {
    margin-top: ${rem(30)};
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    color: white;
    margin-top: ${rem(10)};
  }

  h2 {
    color: white;

    margin-bottom: ${rem(10)};
  }

  img {
    width: 20%;
    height: 20%;
    border-radius: 50%;
  }

  p {
    padding: 0 ${rem(15)} 0 ${rem(15)};
    color: white;
    font-size: ${rem(18)};
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    img {
      width: 30%;
      height: 30%;
    }
  }
`;

export const AnchorRepo = styled(Link)`
  color: salmon;
  pointer-events: auto;

  :hover {
    color: #282d35;
  }
`;

export const ResultsContainer = styled.div`
  margin-top: 10px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .row > a {
    color: salmon;
    pointer-events: auto;
  }

  .row:hover {
    background-color: salmon;
  }

  .row > a:hover {
    color: #282d35;
  }

  .repo-name {
    margin-left: 5px;
  }
`;
