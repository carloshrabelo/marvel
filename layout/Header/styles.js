import styled from "styled-components";
import SearchDOM from "containers/Search";

export const Header = styled.header`
  display: flex;
  gap: var(--space-sm);
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const Title = styled.h1`
  margin: 0;
  text-shadow: 1px 1px var(--white), 2px 2px var(--primary);
  transition: color var(--transition) ease-in-out;

  &:hover {
    color: var(--primary-darken);
    text-shadow: 1px 1px var(--white), 2px 2px var(--primary-darken);
  }
`;

export const Search = styled(SearchDOM)`
  flex: 1;
  margin-bottom: var(--space-sm);
`;
