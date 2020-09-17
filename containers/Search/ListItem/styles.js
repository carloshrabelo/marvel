import styled from "styled-components";

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  padding: var(--space);
  position: relative;

  &:hover {
    background: var(--gray);
  }

  &:after {
    content: "";
    background: var(--gray);
    position: absolute;
    left: var(--space-xlg);
    right: var(--space-xlg);
    height: 1px;
    bottom: 0px;
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
