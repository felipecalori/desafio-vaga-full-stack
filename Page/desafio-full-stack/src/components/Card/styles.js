import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 95%;
  padding: 3rem;
  background-color: var(--background);
  box-sizing: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--background);
  transition: 0.5s;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  div {
    display: flex;
    gap: 0.3rem;
  }

  section .data {
    justify-content: space-between;
  }

  :hover {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
