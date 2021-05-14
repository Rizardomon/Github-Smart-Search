import axios from 'axios';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://api.github.com/users/example`, { headers })
        .then((res) => {
          setData(res.data);
        });
    };
    fetchData();
  }, []); // eslint-disable-line

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
        <S.Header>
          <h1>
            Github Smart Search <S.GithubIcon />
          </h1>
        </S.Header>
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

        <S.Card>
          <S.CardContent>
            <img src={avatar} />
            <h1>{name}</h1>
            <h2>{userName}</h2>
            <p>{bio}</p>
            <h3>Repositórios:</h3>
          </S.CardContent>

          <S.ResultsContainer>{repos.map(renderRepo)}</S.ResultsContainer>
        </S.Card>
      </S.LandingPageContainer>
    </S.ContainerWrapper>
  );
}

export default HomePage;
