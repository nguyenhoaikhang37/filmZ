import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1240px;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Section = styled.div<{ flex?: boolean; justify?: string; vertical?: boolean }>`
  display: ${(props) => (props.flex ? 'flex' : '')};
  align-items: ${(props) => (props.flex ? 'center' : '')};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => (props.vertical ? '16rem 0 8rem 0' : '')};

  /* & > div {
    flex: 1;
  } */
`;

export const SectionTitle = styled.h2`
  font-size: 6.4rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white50}; ;
`;

export const Input = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  padding: 0 1.8rem;
  max-width: ${(props) => props.width || '100%'};
  height: 6.4rem;
  border: 1px solid #323b54;
  border-radius: 1.2rem;
  color: #475069;

  input {
    background-color: transparent;
    border: none;
    flex: 1;
    outline: none;
    margin-left: 1rem;
    color: ${(props) => props.theme.colors.white50};
    height: 100%;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const GridLayout = styled.div<{ gap: string; width: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(props) => props.width}, 1fr));
  grid-gap: ${(props) => props.gap};
`;
