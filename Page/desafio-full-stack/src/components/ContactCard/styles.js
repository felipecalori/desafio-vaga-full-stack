import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  max-width: 90%;
  display: flex;
  height: 3rem;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background);
  border: 1px solid var(--background);
  transition: 0.5s;
  margin-left: 2rem;

  div {
    display: flex;
  }

  span {
    font-size: 10px;
  }

  p {
    font-size: 0.65em;
  }

  :hover {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }
`;
