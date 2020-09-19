import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import Comic from "components/Comic";
import Placeholder from "components/Comic/Placeholder";
import { find } from "reducers/comics";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";

const Wrapper = styled.section`
  column-gap: var(--space-xs);
  display: grid;
  grid-template-columns: repeat(auto-fill, 175px);
  justify-content: space-evenly;
  margin-bottom: var(--space-md);
  row-gap: var(--space-md);

  ${(p) =>
    p.empty &&
    css`
      flex: 1;
      grid-template-columns: auto;
      place-items: center;
    `}
`;

const ComicList = () => {
  const comics = useStore().comics;
  const character = useStore().character;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!comics.data.length) dispatch(find());
  }, []);

  const isEmpty = !comics.isLoading && !comics.data.length;

  return (
    <Wrapper empty={isEmpty}>
      {comics.isLoading ? (
        Array.from(Array(7).keys()).map((index) => <Placeholder key={index} />)
      ) : isEmpty ? (
        <h1>Não foram encontradas HQs sobre o {character?.name}</h1>
      ) : (
        comics.data.map((data) => <Comic key={data.id} {...data} />)
      )}
    </Wrapper>
  );
};
export default ComicList;
