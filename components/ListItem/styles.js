import styled, { css } from "styled-components";

export const Item = styled.div`
  background: var(--bg);
  display: flex;
  padding: var(--space);
  position: relative;

  ${(p) =>
    p.button &&
    css`
      cursor: pointer;

      &:hover {
        background: var(--bg-hover);
      }
    `}

  &:not(:first-child) {
    &:after {
      background: var(--gray);
      content: "";
      height: 1px;
      left: var(--space-xlg);
      position: absolute;
      right: var(--space-xlg);
      top: 0px;
    }
  }
`;

export const Thumbnail = styled.img`
  margin-right: var(--space-sm);
`;

export const Title = styled.div`
  font-size: var(--font-md);
  margin-bottom: var(--space-sm);
`;

export const Description = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
