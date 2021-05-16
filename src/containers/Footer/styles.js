import { rem } from 'polished';
import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 10%;

  p {
    font-size: ${rem(11)};
    color: white;
    text-align: center;
    padding-top: ${rem(20)};
    padding-bottom: ${rem(10)};
  }
`;
