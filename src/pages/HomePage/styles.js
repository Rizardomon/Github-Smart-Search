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
  align-items: center;
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

  h1 {
    color: white;
    text-align: center;
  }
`;

export const Header = styled.header`
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

export const Footer = styled.footer`
  width: 100%;
  height: 10%;
  padding: ${rem(10)} 0 ${rem(10)} 0;

  p {
    color: white;
    text-align: center;
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
  width: 60%;
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
  width: 40%;
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
    width: 30%;
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

  .repo-title {
    font-size: ${rem(30)};
    color: #32256e;
    margin-bottom: ${rem(0)};
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
    margin-bottom: ${rem(40)};
  }

  @media screen and (max-width: 480px) {
    img {
      width: 30%;
      height: 30%;
    }
  }
`;

export const AnchorRepo = styled(Link)`
  pointer-events: auto;
  text-decoration: none;
  color: white;
`;

export const ResultsContainer = styled.div`
  margin-top: ${rem(15)};
  height: auto;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
`;

export const ResultsContent = styled.div`
  background-color: #32256e;
  margin: 0 ${rem(5)} ${rem(15)} ${rem(5)};
  padding-left: ${rem(10)};
  padding-right: ${rem(10)};
  border-radius: 5px;
  transition: background-color 0.3s;
  :hover {
    background-color: rgba(93, 105, 190, 0.5);
  }

  .row {
    cursor: pointer;
    width: ${rem(130)};
    height: ${rem(130)};

    pointer-events: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin-top: ${rem(10)};
      text-align: center;
    }
  }
`;
