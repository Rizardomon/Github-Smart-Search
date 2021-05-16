import { rem } from 'polished';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

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

export const GithubIcon = styled(FaGithub)`
  margin-left: ${rem(10)};
`;
