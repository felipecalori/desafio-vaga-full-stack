import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) =>
    props.purpleSchema ? "var(--color-primary-negative)" : "var(--grey-1)"};
  color: ${(props) => (props.purpleSchema ? "var(--grey-0)" : "#f5f5f5")};
  height: 45px;
  border-radius: 4px;
  border: ${(props) =>
    props.purpleSchema
      ? "2px solid var(--color-primary-negative)"
      : "2px solid var(--grey-1)"};
  font-family: "Roboto Mono", monospace;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;

  :hover {
    border: ${(props) =>
      props.purpleSchema
        ? "2px solid var(--color-primary)"
        : "2px solid var(--grey-3)"};
    background: ${(props) =>
      props.purpleSchema ? "var(--color-primary)" : "var(--grey-3)"};
  }
`;
