import { Container, Section } from '../../styles/GlobalComponents';
import { HeaderContainer, Logo, Nav } from './HeaderStyles';
import logo from '../../assets/images/logo.png';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export interface Props {}

export default function Header(props: Props) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Container>
        <Section flex justify="space-between">
          <Logo onClick={() => navigate('/')} srcSet={`${logo} 2x`} alt="logo" />
          <Nav>
            <p onClick={() => navigate('/')}>Home</p>
            <p>TV Shows</p>
            <p onClick={() => navigate('/login')}>
              Login <BsArrowRight />
            </p>
          </Nav>
        </Section>
      </Container>
    </HeaderContainer>
  );
}
