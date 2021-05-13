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
    client_id: 'Iv1.b8aaad56a9db6278',
    client_secret: 'dd9a3c8eb73ebff03b0e703545ec5be1f2a1a2a2',
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

  const setData = ({ name, login, bio, public_repos, avatar_url }) => {
    setName(name);
    setUserName(login);
    setBio(bio);
    setRepos(public_repos);
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
          // setRepos(res.data);
          console.log(res.data);
        });
    } else {
      setData('');
      setError('Usuário não encontrado!');
    }
  };

  // const renderRepo = () => {
  //   return (
  //     <div className="row" key={repo.id}>
  //       <h2 className="repo-name">{repo.name}</h2>
  //     </div>
  //   );
  // }

  return (
    <S.ContainerWrapper>
      <S.LandingPageContainer>
        <S.FormWrapper>
          <S.FormContent>
            <S.Input
              type="search"
              placeholder="Github Username"
              value={userInput}
              onChange={handleSearch}
            />
            <S.Button type="submit" onClick={handleSubmit}>
              {loading ? 'Buscando...' : 'Buscar'}
            </S.Button>
          </S.FormContent>
          {error && <p>{error}</p>}
        </S.FormWrapper>
        {/* <S.ResultsContainer>{users.map(renderUser)}</S.ResultsContainer> */}

        <S.Card>
          <S.CardContent>
            <img src={avatar} />

            <h1>{name}</h1>
            <h2>{userName}</h2>
            <p>{bio}</p>
          </S.CardContent>
        </S.Card>
      </S.LandingPageContainer>
    </S.ContainerWrapper>
  );
}

export default HomePage;
