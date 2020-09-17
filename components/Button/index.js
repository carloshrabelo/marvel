import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  background: var(--white);
  border: 1px solid var(--gray);
  border-radius: var(--space-sm) 0 var(--space-sm);
  color: var(--primary);
  cursor: pointer;
  padding: var(--space-xs) var(--space-sm);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background: var(--primary);
    border: 1px solid var(--primary);
    color: var(--primary-contrast);
  }
`;

export default Button;
