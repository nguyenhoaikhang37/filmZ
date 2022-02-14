import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Home from './pages/Home';
import { Wrapper } from './styles/GlobalComponents';

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
    </Wrapper>
  );
}

export default App;
