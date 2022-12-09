import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--color-primary);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 50rem;
`;

const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translate(50px);
}
to{
    opacity: 1;
    transform: translate(0px);
}
`;

export const CardBox = styled.div`
  margin-top: 20px;
  background-color: var(--grey-3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  animation: ${appearFromRight} 1s;
  max-height: 80vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  @media (min-width: 780px) {
    max-height: 80vh;
    overflow: auto;
  }
`;
