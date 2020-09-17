import styled, { css } from "styled-components";

const colors = {
  primary: css`
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white);

    &:hover {
      background: var(--primary-darken);
    }
  `,
};

export const Button = styled.button`
  appearance: none;
  background: var(--white);
  border: 1px solid var(--gray);
  border-radius: var(--space-sm) 0 var(--space-sm);
  color: var(--primary);
  cursor: pointer;
  padding: var(--space-xs) var(--space-sm);
  transition: background-color 0.3s ease-in-out;

  &:focus {
    border-color: var(--primary);
    outline: none;
  }

  &:hover {
    background: var(--primary);
    border: 1px solid var(--primary);
    color: var(--primary-contrast);
  }

  ${(p) => p.color && colors[p.color]}
`;

export default Button;
