import { Route, Routes } from 'react-router-dom';

import { Wrapper } from './styles/GlobalComponents';
import Home from './pages/Home';
import LogIn from './pages/LogIn';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
