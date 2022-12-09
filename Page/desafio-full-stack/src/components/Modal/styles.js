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
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  header {
    color: var(--grey-0);
    background-color: var(--grey-2);
    height: 40px;
    width: 100%;
    max-width: 320px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    border-radius: 5px 5px 0 0;
  }

  form {
    background: var(--grey-3);
    max-width: 320px;
    padding: 20px;
    gap: 16px;
    border-radius: 0 0 5px 5px;

    input {
      margin-bottom: 16px;
    }

    .btnBox {
      display: flex;
      gap: 20px;
    }
  }
`;
