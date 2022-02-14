import { ReactNode } from 'react';
import Header from '../components/Header/Header';
import { Container } from '../styles/GlobalComponents';

export interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
