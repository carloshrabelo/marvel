import React, { useEffect } from "react";
import styled from "styled-components";
import Comic from "components/Comic";
import Placeholder from "components/Comic/Placeholder";
import { find } from "reducers/comics";
import useStore from "store/hooks/useStore";
import useDispatch from "store/hooks/useDispatch";

const Wrapper = styled.section`
  display: grid;
  grid-gap: var(--space-xs);
  grid-template-columns: repeat(auto-fill, 175px);
  justify-content: space-evenly;
`;

const ComicList = () => {
  const comics = useStore().comics;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!comics.data.length) dispatch(find());
  }, []);

  return (
    <Wrapper>
      {comics.isLoading
        ? Array.from(Array(7).keys()).map((index) => (
            <Placeholder key={index} />
          ))
        : comics.data.map((data) => <Comic key={data.id} {...data} />)}
    </Wrapper>
  );
};
export default ComicList;
