import axios from 'axios';
import { useState } from 'react';
import Footer from '../../containers/Footer';
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
  const [search, setSearch] = useState(true);

  const api = {
    baseUrl: 'https://api.github.com',
    headers: {
      'User-Agent': 'rizardomon',
    },
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
        .get(`${api.baseUrl}/users/${userInput}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        .then((res) => {
          setData(res.data);
          setError('');
          setSearch(false);
        })
        .catch((err) => {
          setData('');
          setRepos([]);
          setError('Usuário não encontrado!');
          setSearch(true);
        });

      axios
        .get(`${api.baseUrl}/users/${userInput}/repos`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setRepos(res.data);
        });
    } else {
      setData('');
      setRepos([]);
      setError('Usuário não encontrado!');
      setSearch(true);
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
      <S.ResultsContent key={repo.id}>
        <S.AnchorRepo
          to={{
            pathname: '/description',
            state: repoData, // your data array of objects
          }}
        >
          <div className="row">
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
        {search && <h1>Pesquise por um usuário!</h1>}

        <S.FormWrapper>
          {error && <p>{error}</p>}
          <S.FormContent>
            <S.Input
              type="search"
              placeholder="Usuário do Github"
              value={userInput}
              onChange={handleSearch}
            />
            <S.Button type="submit" onClick={handleSubmit}>
              <S.SearchIcon />
              Buscar
            </S.Button>
          </S.FormContent>
        </S.FormWrapper>

        {name && (
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
        )}

        <Footer />
      </S.LandingPageContainer>
    </S.ContainerWrapper>
  );
}

export default HomePage;
