import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-height: 100%;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  margin-top: 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
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

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 10px 0;
    padding: 30px 20px;
    width: 340px;
    text-align: center;
    background-color: var(--grey-3);
    border-radius: 8px;

    h2 {
      margin-bottom: 5px;
    }

    > div {
      margin-top: 16px;
    }

    p {
      font-size: 10px;
    }
  }
`;
