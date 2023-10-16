import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const Section1 = styled.span`
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background: #181818;
  z-index: 2;
  transition: 1.5s;

    &:hover {
      background: #0f0;
      transition: 0s;
    }
  }
`;

export default Section1;
