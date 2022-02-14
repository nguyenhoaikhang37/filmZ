import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.colors.header};
  height: 80px;
  line-height: 80px;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5rem;

  p {
    color: ${(props) => props.theme.colors.white200};
    display: flex;
    align-items: center;
    gap: 0 1rem;
    cursor: pointer;
    position: relative;
    transition: all 0.5s ease;

    &:hover {
      color: ${(props) => props.theme.colors.white50};
    }

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 3px;
      background-color: ${(props) => props.theme.colors.primary};
      bottom: 2rem;
      left: auto;
      right: 0;
      transition: width 0.5s ease;
    }
    &:hover::before {
      width: 100%;
      left: 0;
      right: auto;
    }
  }
`;
