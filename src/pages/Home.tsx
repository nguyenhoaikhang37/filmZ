import Hero from '../components/Hero/Hero';
import { Container, GridLayout } from '../styles/GlobalComponents';
import Product from './UI/Product/Product';

const Home = () => {
  return (
    <Container>
      <Hero />
      <GridLayout gap="24px" width="250px">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </GridLayout>
    </Container>
  );
};

export default Home;
