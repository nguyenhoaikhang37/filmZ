import { Container, Section, SectionTitle } from '../../../../styles/GlobalComponents';
import InputGroup from '../../../../components/Common/InputGroup';
import { Desc } from './HeroStyles';
import { BsSearch } from 'react-icons/bs';

export interface Props {}

export default function Hero(props: Props) {
  return (
    <Container>
      <Section vertical>
        <SectionTitle>MaileHereko</SectionTitle>
        <Desc>
          List of movies and TV Shows, I, <span>Pramod Poudel</span> have watched till date. Explore
          what I have watched and also feel free to make a suggestion. 😉
        </Desc>
        <InputGroup placeholder="Search Movies or TV Shows" icon={<BsSearch />} width="34.4rem" />
      </Section>
    </Container>
  );
}
