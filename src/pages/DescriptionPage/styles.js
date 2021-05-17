import { rem } from 'polished';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const PageContainer = styled.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    text-align: center;
    padding: ${rem(10)} 0 ${rem(10)} 0;
  }
`;

export const ContentWrapper = styled.div`
  height: 70%;
  width: 90%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 5px;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  h1 {
    text-align: start;
    padding: 0;
    margin: ${rem(10)};

    color: #343434;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    padding-left: ${rem(10)};
    margin: ${rem(10)} 0 ${rem(10)} 0;
    color: #343434;
  }

  ::before {
    content: '';
    width: 90%;
    border-bottom: 1px solid #343434;
    margin: 0 auto;
    margin-bottom: ${rem(10)};
  }
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AngleLeftIcon = styled(FaAngleLeft)`
  color: white;
  font-size: ${rem(25)};
`;
