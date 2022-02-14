import styled from 'styled-components';

export const Desc = styled.div`
  max-width: 58.8rem;
  color: ${(props) => props.theme.colors.white200};
  margin: 2rem 0;
  line-height: 2.4rem;
  letter-spacing: 0.1rem;
  font-weight: 400;

  span {
    color: ${(props) => props.theme.colors.pink200};
  }
`;
