import Layout from '../../layout/Layout';
import { Section } from '../../styles/GlobalComponents';
import LogInForm from './UI/LogInForm/LogInForm';
import Player from './UI/Player/Player';

const LogIn = () => {
  return (
    <Layout>
      <Section flex vertical gap="12.6rem" column>
        <Player />
        <LogInForm />
      </Section>
    </Layout>
  );
};

export default LogIn;
