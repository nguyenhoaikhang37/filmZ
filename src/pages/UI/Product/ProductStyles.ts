import styled from 'styled-components';

export const ProductBox = styled.div`
  position: relative;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(80px);
  cursor: pointer;

  border-radius: 12px;
  padding: 0.8rem;

  &:hover {
    color: ${(props) => props.theme.colors.warning};
  }
`;

export const ProductRating = styled.div`
  position: absolute;
  top: 1.2rem;
  left: 1.6rem;
  padding: 0.4rem 0.8rem;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  gap: 0 0.5rem;

  border-radius: 8px;
  color: ${(props) => props.theme.colors.warning};

  p {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const ProductImgBox = styled.div`
  overflow: hidden;
`;

export const ProductImg = styled.img`
  border-radius: 8px;

  width: 100%;
  max-height: 300px;
  object-fit: cover;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ProductContent = styled.p`
  padding: 1.8rem 1.6rem 1rem;
`;

export const ProductName = styled.p`
  font-weight: 600;
`;
