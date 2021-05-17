import * as S from './styles';

function Header({ children }) {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        {children}
        <h1>
          Github Smart Search <S.GithubIcon />
        </h1>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}

export default Header;
