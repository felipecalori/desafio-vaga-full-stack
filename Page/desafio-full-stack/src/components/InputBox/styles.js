import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  font-size: 14px;
  font-size: 10px;

  input {
    background: var(--grey-2);
    border-radius: 4px;
    border: 2px solid var(--grey-2);
    color: var(--grey-0);
    padding: 0.8rem;
    width: 100%;
    margin-top: 20px;
    transition: 0.5s;
    :hover {
      border: 2px solid var(--grey-0);
    }
  }

  select {
    background: var(--grey-2);
    border-radius: 4px;
    border: 2px solid var(--grey-2);
    color: var(--grey-1);
    padding: 0.8rem;
    width: 100%;
    margin-top: 20px;
    :hover {
      border: 2px solid var(--grey-0);
    }
  }
`;
