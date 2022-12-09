import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translate(-50px);
}
to{
    opacity: 1;
    transform: translate(0px);
}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  h2 {
    color: var(--color-primary);
    transition: 0.5s;

    :hover {
      filter: drop-shadow(-3px -5px 3px var(--color-primary));
    }
  }

  button {
    padding: 10px 20px;
    color: var(--grey-0);
    background: var(--grey-3);
    border: 2px solid var(--grey-3);
    border-radius: 8px;
    transition: 0.5s;

    :hover {
      background: var(--grey-2);
      border: 2px solid var(--grey-2);
    }
  }
`;
