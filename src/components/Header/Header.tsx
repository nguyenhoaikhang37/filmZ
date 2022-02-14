import { Container, Section } from '../../styles/GlobalComponents';
import { HeaderContainer, Logo, Nav } from './HeaderStyles';
import logo from '../../assets/images/logo.png';
import { BsArrowRight } from 'react-icons/bs';

export interface Props {}

export default function Header(props: Props) {
  return (
    <HeaderContainer>
      <Container>
        <Section flex justify="space-between">
          <Logo srcSet={`${logo} 2x`} alt="logo" />
          <Nav>
            <p>Home</p>
            <p>TV Shows</p>
            <p>
              Suggest me <BsArrowRight />
            </p>
          </Nav>
        </Section>
      </Container>
    </HeaderContainer>
  );
}
