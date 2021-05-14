import { useLocation } from 'react-router';
import { Container } from './styles';

function DescriptionPage() {
  let repoData = useLocation();

  return (
    <Container>
      <h1>{repoData.state.name}</h1>
      <h1>{repoData.state.description}</h1>
      <h1>{repoData.state.owner}</h1>
      <h1>{repoData.state.language}</h1>
    </Container>
  );
}

export default DescriptionPage;
