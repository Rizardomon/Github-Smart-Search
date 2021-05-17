import { useLocation } from 'react-router';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import * as S from './styles';

function DescriptionPage() {
  let repoData = useLocation();

  return (
    <S.ContainerWrapper>
      <S.PageContainer>
        <Header>
          <S.CustomLink to="/">
            <S.AngleLeftIcon />
          </S.CustomLink>
        </Header>
        <S.ContentWrapper>
          <h1>Dados do repositório</h1>
          <S.Content>
            <p>
              <b>Nome:</b> {repoData.state.name}
            </p>
            <p>
              <b>Descrição:</b> {repoData.state.description}
            </p>
            <p>
              <b>Dono:</b> {repoData.state.owner}
            </p>
            <p>
              <b>Linguagem:</b> {repoData.state.language}
            </p>
          </S.Content>
        </S.ContentWrapper>
        <Footer />
      </S.PageContainer>
    </S.ContainerWrapper>
  );
}

export default DescriptionPage;
