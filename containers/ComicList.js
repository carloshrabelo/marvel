import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comic from "components/Comic";

const Wrapper = styled.section`
  display: grid;
  grid-gap: var(--space-xs);
  grid-template-columns: repeat(auto-fill, 175px);
  justify-content: space-evenly;
`;

const ComicList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/api/comics")
      .then((results) => results.json())
      .then(setList);
  }, []);

  return (
    <Wrapper>
      {list.map((data) => (
        <Comic key={data.id} {...data} />
      ))}
    </Wrapper>
  );
};
export default ComicList;
