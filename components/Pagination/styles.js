import styled, { css } from "styled-components";

export const Pagination = styled.ul`
  display: flex;
  gap: var(--space-xs);
  justify-content: center;
  list-style: none;
`;

const ItemActive = css`
  background: var(--primary);
  border-color: var(--primary);
  color: var(--primary-contrast);

  &:hover {
    background: var(--primary-darken);
  }
`;

const ItemDisabled = css`
  background: var(--gray);
  border-color: var(--gray);
  color: var(--primary-contrast);
  cursor: default;

  &:hover {
    background: var(--gray);
    border-color: var(--gray);
  }
`;

export const Item = styled.li`
  background: var(--bg);
  border: 1px solid var(--primary);
  border-radius: 5px;
  color: var(--primary);
  cursor: pointer;
  padding: var(--space-xs) var(--space-sm);
  transition: background-color var(--transition) ease-in-out;
  will-change: background-color;

  &:hover {
    background: var(--bg-hover);
    border-color: var(--primary-darken);
  }

  ${(p) => p.active && ItemActive}
  ${(p) => p.disabled && ItemDisabled}
`;
