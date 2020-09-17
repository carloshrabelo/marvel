import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    position: relative;
  }
`;

export const Form = styled.form`
  display: flex;
`;

export const Search = styled.input.attrs({ type: "search" })`
  border: 0;
  border-bottom: 2px solid var(--primary);
  flex: 1;
  outline: none;
  padding: var(--space-xs) var(--space-sm);

  &:focus,
  &:hover {
    border-color: var(--primary-darken);
  }
`;

export const List = styled.div`
  background: #fff;
  box-shadow: var(--box-shadow);
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
`;
