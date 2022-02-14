import styled from 'styled-components';

export const SkeletonBox = styled.div`
  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  width: '100%';
  border-radius: 12px;
  background-color: #374151;
`;
