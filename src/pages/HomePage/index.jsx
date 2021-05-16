import axios from 'axios';
import { useState } from 'react';
import Header from '../../containers/Header';
import * as S from './styles';

function HomePage() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [repos, setRepos] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const api = {
    baseUrl: 'http://api.github.com',
  };

  const headers = {
    'User-Agent': 'rizardomon',
  };

  const setData = ({ name, login, bio, avatar_url }) => {
    setName(name);
    setUserName(login);
    setBio(bio);
    setAvatar(avatar_url);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setUserInput(search);
  };

  const handleSubmit = () => {
    if (userInput.trim() !== '') {
      axios
        .get(`${api.baseUrl}/users/${userInput}`, { headers })
        .then((res) => {
          setData(res.data);
          setError('');
        });

      axios
        .get(`${api.baseUrl}/users/${userInput}/repos`, { headers })
        .then((res) => {
          setRepos(res.data);
        });
    } else {
      setData('');
      setRepos([]);
      setError('Usuário não encontrado!');
    }
  };

  const renderRepo = (repo) => {
    const repoData = {
      name: repo.name,
      description: repo.description,
      owner: repo.owner.login,
      language: repo.language,
    };
    return (
      <S.ResultsContent>
        <S.AnchorRepo
          to={{
            pathname: '/description',
            state: repoData, // your data array of objects
          }}
        >
          <div className="row" key={repo.id}>
            <S.GithubIcon size={30} />
            <span>{repo.name}</span>
          </div>
        </S.AnchorRepo>
      </S.ResultsContent>
    );
  };

  return (
    <S.ContainerWrapper>
      <S.LandingPageContainer>
        <Header />
        <S.FormWrapper>
          <S.FormContent>
            <S.Input
              type="search"
              placeholder="Github Username"
              value={userInput}
              onChange={handleSearch}
            />
            <S.Button type="submit" onClick={handleSubmit}>
              <S.SearchIcon />
              {loading ? 'Buscando...' : 'Buscar'}
            </S.Button>
          </S.FormContent>
          {error && <p>{error}</p>}
        </S.FormWrapper>

        {name !== '' ? (
          <S.Card>
            <S.CardContent>
              <img src={avatar} alt="Github avatar" />
              <h1>{name}</h1>
              <h2>{userName}</h2>
              <p>{bio}</p>
              <h2 className="repo-title">Repositórios:</h2>
            </S.CardContent>

            <S.ResultsContainer>{repos.map(renderRepo)}</S.ResultsContainer>
          </S.Card>
        ) : (
          <h1>Pesquise por um usuário!</h1>
        )}
        <S.Footer>
          <p>Copyright © Richard Robinson</p>
        </S.Footer>
      </S.LandingPageContainer>
    </S.ContainerWrapper>
  );
}

export default HomePage;
