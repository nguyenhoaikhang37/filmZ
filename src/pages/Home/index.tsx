import Hero from './UI/Hero/Hero';
import { GridLayout, Spacing } from '../../styles/GlobalComponents';
import Product from './UI/Product/Product';
import Skeleton from '../../components/Common/Skeleton/Skeleton';
import Layout from '../../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />

      <GridLayout gap="24px" width="266px">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Skeleton />
      </GridLayout>

      <Spacing top="10rem" />
    </Layout>
  );
};

export default Home;
