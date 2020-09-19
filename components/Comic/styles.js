import styled from "styled-components";

export const Thumbnail = styled.img`
  box-shadow: var(--box-shadow);
  transition: transform 0.17s ease-in-out;
  will-change: transform;
`;

export const Creators = styled.div`
  color: var(--gray);
  font-size: var(--font-sm);
  height: 1em;
  margin-bottom: var(--space-xs);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const Comic = styled.div`
  align-items: center;
  display: inline-flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  transition: color var(--transition) ease-in-out;
  will-change: color;

  &:hover {
    ${Thumbnail} {
      transform: translate3d(0, calc(-1 * var(--space-xs)), 0);
    }
    ${Creators} {
      height: auto;
      overflow: visible;
      white-space: normal;
    }
  }
`;

export const Title = styled.div`
  padding: var(--space-xs) 0;
`;

export default Comic;
